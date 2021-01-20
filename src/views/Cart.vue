<template>
  <div id="cartpage">
    <div class="shopping-cart">
      <h1>Your Cart</h1>
      <CartItem v-for="cartItem in products" :key="cartItem.productName" :cartItem="cartItem" :cartSave="products"/>
    </div>
    <div id="spacer"></div>
    <div class="summary">
      <label for="address">Address:</label>
      <p>Bangalore, Karnataka</p>
      <label for="total">Subtotal:</label>
      <!-- <p><span>{{subtotal}}</span></p> -->
      <!-- <div>
        <label for="cars">Select payment method:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div> -->
      <router-link to="/ordersuccessful"><button id="checkout" @click="checkout">Checkout</button></router-link>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
  components: { CartItem },
  name: 'Cart',
  data: () => ({
    products: [],
    productId: '',
    merchantId: '',
    order: {}
  }),
  computed: {
    subtotal: function () {
      let sum = 0
      this.products.forEach((element) => {
        sum += (element.productPrice * element.quantity)
      })
      return sum
    }
  },
  mounted () {
    const data = []
    fetch('http://10.177.68.63:8082/order/getCart/' + this.$store.getters.getEmail)
      .then((res) => res.json())
      .then((res) => {
        this.$store.dispatch('fetchProduct', res)
        console.log('firsr Result', this.$store.state.product)
        res.productEntities.forEach((element) => {
          const temp = {}
          // console.log(element)
          temp.productId = element.productId
          temp.merchantId = element.merchantId
          temp.quantity = element.quantity
          data.push(temp)
        })
        this.products = data
        console.log('data inside fetch vue', this.products)
      })
    // console.log(this.$store.state.product)
    // console.log('data outside vue', this.products)
    // this.products = data
  },
  methods: {
    checkout () {
      // send order details
      this.order.date = new Date()
      this.order.address = this.$store.getters.getAddress
      this.order.productEntities = this.products
      this.order.customerEmail = this.$store.getters.getEmail
      this.order.totalPrice = 0
      this.order.productEntities.forEach((element) => {
        fetch('http://10.177.68.63:8082/Inventory/findSpecificPrice/' + element.productId + '/' + element.merchantId)
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            this.order.totalPrice += res
            console.log(this.order.totalPrice)
          })
      })
      console.log(this.order.totalPrice)
      fetch('http://10.177.68.63:8082/order/altsave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.order)
      })
        .then((res) => res.json())
        .then(res => {
          console.log(res)
          fetch('http://10.177.68.63:8082/order/sendMail/' + res._id)
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
            })
        })
      // redirect to order summary
      // console.log('done')
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  background: #323232;
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  color: #14ffec;
  margin-bottom: 60px;
}
label{
  font-weight: bold;
}
#cartpage{
  width: 80%;
  display: flex;
  margin: 0 auto;
  margin-top: 10%;
}

#spacer {
  flex-grow: 1;
  max-width: 50px;
}
.summary {
  background: #323232;
  height: fit-content;
  color: #14ffec;
  flex-grow: 2;
  align-content: center;
  justify-content: center;
}

#checkout {
  width: 100%;
  border: none;
  background-color: #121212;
  color: #14ffec;
  /* padding: 20px */
}
#checkout:hover{
  background-color: #14ffec;
  color: #121212;
}
h1{
  border-bottom: 2px solid white !important;
  padding-bottom: 18px;
}
</style>
