<template>
  <div id="ordersummary">
    <div class="shopping-cart">
      <h1>Order Summary</h1>
      <OrderItem v-for="orderIt in orderItems" :key="orderIt.productName" :orderItem="orderIt" />
    </div>
    <div id="spacer"></div>
    <div class="summary">
      <label for="address">Address:</label>
      <p>Bangalore, Karnataka</p>
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
import OrderItem from '../components/OrderItem.vue'
export default {
  components: { OrderItem },
  name: 'Order',
  data: () => ({
    address: 'Quin Bay',
    orderItems: [
      {
        productName: 'product 1',
        productPrice: 400,
        productQuanity: 2
      },
      {
        productName: 'product 2',
        productPrice: 250,
        productQuanity: 6
      },
      {
        productName: 'product 3',
        productPrice: 390,
        productQuanity: 1
      },
      {
        productName: 'product 4',
        productPrice: 450,
        productQuanity: 7
      }
    ]
  }),
  computed: {
    subtotal: function () {
      let sum = 0
      this.cartItems.forEach((element) => {
        sum += (element.productPrice * element.productQuanity)
      })
      return sum
    }
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
#ordersummary{
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
