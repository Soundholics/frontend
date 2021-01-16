<template>
    <div class="product-card">
      <div class="product-image">
        <img :src="product.image">
      </div>
      <div class="product-info">
        <h5>{{product.productName}}</h5>
        <h6>{{product.price}}</h6>
      </div>
    </div>

</template>

<script>
export default {
  name: 'SearchResult',
  props: ['product']
}
</script>

<style scoped>

.product-card {
  margin: 1%;
  flex-basis: 23%;
  min-width: 200px;
}
.product-image img {
  max-width: 100%;
}
.product-info {
  margin-top: auto;
}
</style>
