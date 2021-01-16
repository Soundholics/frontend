<template>
  <div class="review">
      <label for="name">{{cname}}</label>
      <label for="rating">Rated: </label>
      {{rating.rate}}
      <article>{{rating.review}}</article>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['rating'],
  data: () => ({
    cname: 'Guest' // take customer name through id
  })
}
</script>

<style>
.review{
  border: 2px solid #323232;
  margin:10px;
}
label[for="name"]{
  display: block;
  text-align: end;
}
</style>
