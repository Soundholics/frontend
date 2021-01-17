<template>
  <div class="home">
    <nav id="cat">
    <figure>
      <img src="../assets/headphone.svg" alt="Headphone">
      <figcaption>Headphones</figcaption>
    </figure>
    <figure>
      <img src="../assets/earphone.svg" alt="Earphone">
      <figcaption>Earphone</figcaption>
    </figure>
    <figure>
      <img src="../assets/speaker.svg" alt="Speaker">
      <figcaption>Speaker</figcaption>
    </figure>
    <figure>
      <img src="../assets/earbud.svg" alt="Earbuds">
      <figcaption>Earbuds</figcaption>
    </figure>
    <figure>
      <img src="../assets/audioplayer.svg" alt="Audio Players">
      <figcaption>Audio Players</figcaption>
    </figure>
    </nav>
    <!-- <div class="flex-container">
      <img v-for="product in products" :key=product._id :src='product.images' :alt=product.category class="temp">
    </div> -->
    <!-- <Card></Card> -->
    <Carousel/>
    <!-- <div class="container-image">
      <figure>
        <img src="../assets/audioplayer-temp.jpeg" alt="Audioplayer">
        <figcaption>Audio Player</figcaption>
      </figure>
      <figure>
        <img src="../assets/earbuds-temp.jpeg" alt="Audioplayer">
        <figcaption>Earbuds</figcaption>
      </figure>
      <figure>
        <img src="../assets/earphone-temp.jpeg" alt="Audioplayer">
        <figcaption>Earphones</figcaption>
      </figure>
      <figure>
        <img src="../assets/speaker-temp.jpeg" alt="Audioplayer">
        <figcaption>Speaker</figcaption>
      </figure>
      <figure>
        <img src="../assets/headphone-temp.jpeg" alt="Audioplayer">
        <figcaption>Headphone</figcaption>
      </figure>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Card from '../components/Card.vue'
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  // components: { Card }
  components: { Carousel }
  // data: () => ({
  //   products: [{
  //     _id: 'prod1',
  //     category: 'speaker',
  //     stock: 5,
  //     attribute: [],
  //     images: '../assets/speaker-temp.jpeg'
  //   },
  //   {
  //     _id: 'prod2',
  //     category: 'earphone',
  //     stock: 5,
  //     attribute: [],
  //     images: '../assets/earphone-temp.jpeg'
  //   },
  //   {
  //     _id: 'prod3',
  //     category: 'headphone',
  //     stock: 5,
  //     attribute: [],
  //     images: '../assets/headphone-temp.jpeg'
  //   },
  //   {
  //     _id: 'prod4',
  //     category: 'earbuds',
  //     stock: 5,
  //     attribute: [],
  //     images: '../assets/earbuds-temp.jpeg'
  //   },
  //   {
  //     _id: 'prod6',
  //     category: 'headphone',
  //     stock: 5,
  //     attribute: [],
  //     images: '../assets/audioplayer-temp.jpeg'
  //   }
  //   ]
  // })
  // }),
  // computed: {
  //   url: function () {
  //     const images = require.context('../assets/', false, /\.jpeg$/)
  //     return images('./' + images + '.jpeg')
  //   }
  // }
}
</script>
<style>
.home{
   margin: 100px auto 0;
  /* background-color: #323232; */
  color: #14ffec;
}
#cat{
    /* padding-top: 70px; */
    display: flex;
    justify-content:space-around;
    background-color: #323232;
    color: #14ffec;
  }
/* figure{
  display: inline-block;
  margin: 6px;
} */
/*figure img {
    height: 3em;
  }*/
  .container-image{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    background-color: #0d7377;
  }
  /*.temp{
    max-width: 20%;
    height: 60rem;
  }*/
  .container-image figure{
    background-color: #323232;
  }
  .container-image figure img{
    height: 450px;
    width: 300px;
  }
</style>
