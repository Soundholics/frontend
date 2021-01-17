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
  padding: 0 1% 1% 0;
  flex-basis: 24%;
  min-width: 200px;
  background: white;
  padding: 20px 0;

}
.product-image {
  margin: 0 5px;
}

.product-image img {
  max-width: 100%;
  border-radius: 6px;
}
.product-info {
  margin-top: auto;
}
</style>
