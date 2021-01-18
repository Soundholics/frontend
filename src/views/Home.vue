<template>
  <div class="home">
        <Carousel/>
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
    <card :productItem="products"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from '../components/Card.vue'
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components: { Carousel, Card },
  data: () => ({
    products: [{
      _id: 'prod1',
      name: 'product1',
      category: 'speaker',
      stock: 5,
      attribute: [],
      images: '../assets/speaker-temp.jpeg'
    },
    {
      _id: 'prod2',
      name: 'product2',
      category: 'earphone',
      stock: 5,
      attribute: [],
      images: '../assets/earphone-temp.jpeg'
    },
    {
      _id: 'prod3',
      name: 'product3',
      category: 'headphone',
      stock: 5,
      attribute: [],
      images: '../assets/headphone-temp.jpeg'
    },
    {
      _id: 'prod4',
      name: 'product4',
      category: 'earbuds',
      stock: 5,
      attribute: [],
      images: '../assets/earbuds-temp.jpeg'
    },
    {
      _id: 'prod6',
      name: 'product5',
      category: 'headphone',
      stock: 5,
      attribute: [],
      images: '../assets/audioplayer-temp.jpeg'
    }
    ]
  }),
  beforeMount () {
    fetch('http://10.177.68.63:8082/product/getallproducts')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.products = res
      })
  }
}
</script>
<style>
.home{
   margin: 80px auto 0;
  /* background-color: #323232; */
  color: #14ffec;
}
#cat{
    /* padding-top: 70px; */
    display: flex;
    justify-content:space-around;
    background-color: #323232;
    color: #14ffec;
    margin-bottom: 30px;
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
