<template>
  <div>
    <main class="container">
    <!-- Left Column / Headphones Image -->
      <div class="left-column">
        <!-- <img data-image="black" src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt="">
        <img data-image="blue" src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt="">
        <img data-image="red" class="active" src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt=""> -->
        <!-- <Slider /> -->
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <b-carousel-slide v-for="image in this.images" :img-src="image" :key="image"></b-carousel-slide>
        </b-carousel>
      </div>
      <!-- Right Column -->
      <div class="active right-column">
        <!-- Product Description -->
        <div class="product-description">
          <span>{{product.category}}</span>
          <h1>{{product.name}}</h1>
          <p>{{product.description}}</p>
        </div>

        <!-- Product Pricing -->
        <div class="product-price">
          <span>${{merchantList[currentMerchant].price*quantity}}</span>
        </div>
        <br>
          <div class="quantity">
            <label>Quantity: </label>
            <b-form-spinbutton ide="demo-sb" v-model="quantity" min="1" max="100" inline></b-form-spinbutton>
          </div>
          <br>
        <p>Sold by:
          <select name="" id="" v-model="currentMerchant">
            <option v-for="(merchant, index) in merchantList" :value="index" :key="merchant.merchantId" >{{merchant.merchantId}}</option>
          </select>
        </p>
        <a href="#" class="cart-btn" @click="cartSave">Add to cart</a>
      </div>
    </main>
    <Comment v-for="rat in rating" :key=rat.id :rating=rat />
  </div>

</template>

<script>
import Comment from '../components/Comment'
export default {
  name: 'Product',
  components: { Comment },
  data: () => ({
    product: {},
    rating: [],
    slide: 0,
    sliding: null,
    currentMerchant: 0,
    merchantList: ['merchant 1', 'merchant 2', 'merchant 3', 'merchant 4'],
    quantity: 1,
    images: [
      // 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg',
      // 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg',
      // 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg',
      'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
    ],
    cart: {
      products: {
        productId: '',
        quantity: '',
        merchantId: ''
      },
      customerEmail: ''
    }
  }),
  beforeMount () {
    // const data = [{
    //   id: 'cust1',
    //   rate: 4.5,
    //   review: 'It\'s good!'
    // },
    // {
    //   id: 'cust2',
    //   rate: 2.0,
    //   review: 'Won\'t recommend.'
    // }]
    // this.rating = data
    fetch('http://10.177.68.63:8082/product/getproduct/' + this.$route.params.id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.product = res
        this.cart.products.productId = res.productId
      })

    fetch('http://10.177.68.63:8082/Inventory/findProduct/' + this.$route.params.id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.merchantList = res
      })
    this.cart.customerEmail = this.$store.getters.getEmail
    this.cart.products.productId = this.product.productId
  },
  methods: {
    send () {
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    cartSave () {
      this.cart.products.quantity = this.quantity
      this.cart.products.merchantId = this.merchantList[this.currentMerchant].merchantId
      fetch('http://10.177.68.63:8082/order/getCart/' + this.cart.customerEmail)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetch('http://10.177.68.63:8082/order/updateCart/' + this.cart.customerEmail, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.cart.products)
          })
            .then((res) => {
              console.log(res)
            })
        })
        .catch(e => {
          fetch('http://10.177.68.63:8082/order/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.cart)
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
            })
        })
    }
  }
}
</script>

<style>
.product{
    /* border: 2px solid #323232; */
    background-color: #0D7377;
    /* display: block; */
    /* width: fit-content; */
    margin: 120px auto 0;
    /* text-align: center; */
    padding: 10px;
    color: #14ffec;
}
/* img{
    width: 300px;
    display: inline-block;
}*/
.quantity{
  display: flex;
  justify-content: center;
}
label, p{
    margin: 10px;
    color: #14ffec;
    font-weight: bold;
}
/*#blue, button{
  background-color: #323232;
  color: #14ffec;
  border: none;
  padding: 5px;
  margin: 10px;
}
a{
  color: #14ffec;
}
hr{
  border-top: 1px solid #323232;
}
button[type="submit"]{
    margin:0;
}
#count{
    border: 1px solid #121212;
    background-color: white;
    display: inline-block;
    width: 30px;
    height: 25px;
    margin:0;
    color: #323232;
} */

.container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 10%;
  padding: 15px;
  display: flex;
}
.left-column {
  width: 65%;
  position: relative;
  margin-right: 5%;
}
.right-column {
  width: 35%;
}

.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
  text-align: left;
}
.product-description span {
  font-size: 12px;
  color: #323232;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #14ffec;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #14ffec;
  line-height: 24px;
}
.product-color {
  margin-bottom: 30px;
}
.color-choose div {
  display: inline-block;
}
.color-choose input[type="radio"] {
  display: none;
}
.color-choose input[type="radio"] + label span {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}
.color-choose input[type="radio"] + label span {
  border: 2px solid #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.33);
}
.color-choose input[type="radio"]#red + label span {
  background-color: #C91524;
}
.color-choose input[type="radio"]#blue + label span {
  background-color: #314780;
}
.color-choose input[type="radio"]#black + label span {
  background-color: #323232;
}
.color-choose input[type="radio"]:checked + label span {
  background-image: url("../assets/audioplayer.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.cable-choose {
  margin-bottom: 20px;
}
.cable-choose button {
  border: 2px solid #E1E8EE;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #14ffec;
  background-color: #fff;
  cursor: pointer;
  transition: all .5s;
}
.cable-choose button:hover,
.cable-choose button:active,
.cable-choose button:focus {
  border: 2px solid #86939E;
  outline: none;
}
.cable-config {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.cable-config a {
  color: #358ED7;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;
}
.cable-config a:before {
  content: "?";
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid rgba(53, 142, 215, 0.5);
  display: inline-block;
  text-align: center;
  line-height: 16px;
  opacity: 0.5;
  margin-right: 5px;
}
.product-price {
  display: flex;
  justify-content: center;
}
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #14ffec;
  margin-right: 20px;
}
.cart-btn {
  display: inline-block;
  background-color: #323232;
  border-radius: 6px;
  font-size: 16px;
  color: #14ffec;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
  margin-left: 10px;
}
.cart-btn:hover {
  background-color: #14ffec;
  color: #323232;
}
.quantity{
  display: flex;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  height: 30px;
  width: 30px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
  border-radius: 6px;
  margin: 0 2px;
}
.minus-btn,
.plus-btn {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }
  .left-column,
  .right-column {
    width: 100%;
  }
  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}
@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
}
</style>
