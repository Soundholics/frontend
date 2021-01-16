<template>
  <div class="product">
      <h2>{{product.name}} ({{product.id}})</h2>
      <img :src='product.image' alt="Product Image">
      <h3>USD {{product.price}}</h3>
      <button type="submit" @click="decrement">-</button><p id="count">{{product.quantity}}</p><button type="submit" @click="increment">+</button>
      <br>
      <button type="button" @submit="send">Add to Cart</button>
      <hr>
      <section>
          <h2>Comments</h2>
          <Comment v-for="rat in rating" :key=rat.id :rating=rat />
      </section>
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
img{
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
}
</style>
