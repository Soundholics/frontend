<template>
  <div>
    <main class="container">
    <!-- Left Column / Headphones Image -->
      <div class="left-column">
        <img data-image="black" src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt="">
        <img data-image="blue" src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt="">
        <img data-image="red" class="active" src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt="">
      </div>
      <!-- Right Column -->
      <div class="right-column">
        <!-- Product Description -->
        <div class="product-description">
          <span>{{product.category}}</span>
          <h1>{{product.name}}</h1>
          <p>{{product.description}}</p>
        </div>
        <!-- Product Configuration -->
        <div class="product-configuration">
          <!-- Product Color -->
          <div class="product-color">
            <span>Color</span>
            <div class="color-choose">
              <div>
                <input data-image="red" type="radio" id="red" name="color" value="red" checked>
                <label for="red"><span></span></label>
              </div>
              <div>
                <input data-image="blue" type="radio" id="blue" name="color" value="blue">
                <label for="blue"><span></span></label>
              </div>
              <div>
                <input data-image="black" type="radio" id="black" name="color" value="black">
                <label for="black"><span></span></label>
              </div>
            </div>
          </div>
          <!-- Cable Configuration -->
          <!-- <div class="cable-config">
          <span>Cable configuration</span>
          <div class="cable-choose">
          <button>Straight</button>
          <button>Coiled</button>
          <button>Long-coiled</button>
          </div>
          <a href="#">How to configurate your headphones</a>
          </div> -->
        </div>
        <!-- Product Pricing -->
        <div class="product-price">
          <span>${{product.price}}</span>
          <div class="quantity">
            <button @click="decrement" class="minus-btn" type="button" name="button">-</button>
            <input type="text" name="name" :value="product.quantity">
            <button @click="increment" class="plus-btn" type="button" name="button">+</button>
          </div>
        </div>
        <a href="#" class="cart-btn">Add to cart</a>
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
    product: {
      id: 'prod1',
      name: 'headphone',
      category: 'headphones',
      description: 'adakjsd asfkja adakuw aw eaiuwbd aw awduibw dwadj ubib',
      price: 324,
      image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg',
      quantity: 1
    },
    rating: []
  }),
  beforeMount () {
    const data = [{
      id: 'cust1',
      rate: 4.5,
      review: 'It\'s good!'
    },
    {
      id: 'cust2',
      rate: 2.0,
      review: 'Won\'t recommend.'
    }]
    this.rating = data
  },
  methods: {
    increment () {
      this.product.quantity++
      //   console.log(this.product.quantity)
      return this.product.quantity
    },
    decrement () {
      if (this.product.quantity !== 1) {
        this.product.quantity--
      }
      //   console.log(this.product.quantity)
      return this.product.quantity
    },
    send () {
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
}
label[for], input{
    margin: 10px;
}
#blue, button{
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
.left-column img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.3s ease;
}
.left-column img.active {
  opacity: 1;
  height: 100%;
  width: auto;
}
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
  text-align: left;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
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
  color: #5E6977;
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
  color: #43474D;
  margin-right: 20px;
}
.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
  margin-left: 10px;
}
.cart-btn:hover {
  background-color: #64af3d;
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
