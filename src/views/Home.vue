<template>
  <div class="home">
    <nav id="cat">
    <figure>
      <img src="../assets/headphone.svg" alt="Headphone">
      <figcaption>Headphones</figcaption>
    </figure>
    <!-- <img src="src/assets/earphone.png" alt="Earphone">
    <figcaption>Earphone</figcaption> -->
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
    <div class="flex-container">
      <img src="../assets/speaker-temp.jpeg" alt="" class="temp">
      <img src="../assets/earphone-temp.jpeg" alt="" class="temp">
      <img src="../assets/earbuds-temp.jpeg" alt="" class="temp">
      <img src="../assets/headphone-temp.jpeg" alt="" class="temp">
      <img src="../assets/audioplayer-temp.jpeg" alt="" class="temp">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'
//   components: {
//     HelloWorld
//   }
}
</script>
<style>
figure{
  display: inline-block;
  margin: 6px;
}
figure img {
    /* height: 75px; */
    height: 3em;
  }
  #cat{
    padding-top: 70px;
    display: flex;
    justify-content:space-around;
    background-color: #323232;
    color: #00ccff;
  }
  .flex-container{
    display: flexbox;
    flex-direction: row;
    margin-top: 20px;
    background-color: #0d7377;
  }
  .temp{
    max-width: 20%;
    height: 60rem;
  }
  #home{
    background-color: #0d7377;
  }
</style>
