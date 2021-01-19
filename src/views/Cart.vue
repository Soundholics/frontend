<template>
  <div id="cartpage">
    <div class="shopping-cart">
      <h1>Your Cart</h1>
      <CartItem v-for="cartItem in products" :key="cartItem.productName" :cartItem="cartItem" />
      {{this.$store.state.product[0].productName}}
    </div>
    <div id="spacer"></div>
    <div class="summary">
      <label for="address">Address:</label>
      <p>Bangalore, Karnataka</p>
      <label for="total">Subtotal:</label>
      <p><span>{{subtotal}}</span></p>
      <!-- <div>
        <label for="cars">Select payment method:</label>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div> -->
      <button id="checkout" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
  components: { CartItem },
  name: 'Cart',
  data: () => ({
    products: []
  }),
  computed: {
    subtotal: function () {
      let sum = 0
      this.products.forEach((element) => {
        sum += (element.productPrice * element.productQuantity)
      })
      return sum
    }
  },
  created () {
    // const data = []
    // const customerEmail = this.$store.getters.getEmail
    // fetch('http://10.177.68.63:8082/order/getCart/' + customerEmail)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res)
    //     res.productEntities.forEach((element) => {
    //       console.log(element)
    //       const temp = {}
    //       fetch('http://10.177.68.63:8082/product/getproduct/' + element.productId)
    //         .then((res) => res.json())
    //         .then((res) => {
    //           console.log(res)
    //           temp.productName = res.name
    //         })
    //       fetch('http://10.177.68.63:8082/Inventory/findSpecificPrice/' + element.productId + '/' + element.merchantId)
    //         .then((res) => res.json())
    //         .then((res) => {
    //           console.log(res)
    //           temp.productPrice = res
    //         })
    //       temp.productQuantity = element.quantity
    //       data.push(temp)
    //       console.log(data)
    //     })
    //     console.log(res)
    //   })
    // this.product = data
    // console.log(this.cartItems)
    const data = []
    fetch('http://10.177.68.63:8082/order/getCart/' + this.$store.getters.getEmail)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        res.productEntities.forEach((element) => {
          const temp = {}
          console.log(element)
          fetch('http://10.177.68.63:8082/product/getproduct/' + element.productId)
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              temp.productName = res.name
            })
          fetch('http://10.177.68.63:8082/Inventory/findSpecificPrice//' + element.productId + '/' + element.merchantId)
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              temp.productPrice = res
            })
          temp.productQuantity = element.quantity
          data.push(temp)
        })
      })
    this.$store.dispatch('fetchProduct', data)
    console.log(this.$store.state.product)
    this.products = data
  },
  watch: {
  },
  methods: {
    checkout () {
      // send order details
      // redirect to order summary
      console.log('done')
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
