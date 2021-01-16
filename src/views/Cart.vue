<template>
  <div id="cartpage">
    <div class="shopping-cart">
      <h1>Your Cart</h1>
      <CartItem v-for="cartItem in cartItems" :key="cartItem.productName" :cartItem="cartItem" />
    </div>
    <div id="spacer"></div>
    <div class="summary">
      <p>Subtotal: <span>{{subtotal}}</span></p>
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
    cartItems: [
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
  background: #FFFFFF;
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
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
  background: #FFFFFF;
  flex-grow: 2;
  align-content: center;
  justify-content: center;
}

#checkout {
  width: 100%;
  border: none;
  padding: 20px
}
</style>
