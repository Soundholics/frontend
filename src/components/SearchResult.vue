<template>
  <div class="product-card">
    <router-link :to="'/product/' + product.productId">
      <div class="product-image">
        <img :src="this.image">
      </div>
      <div class="product-info">
        <h5>{{product.productName}}</h5>
        <h6>{{price}}</h6>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: ['product'],
  data: () => ({
    price: '',
    image: ''
  }),
  mounted () {
    fetch('http://10.177.68.63:8082/Inventory/findPrice/' + this.product.productId)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.price = res
      })
    fetch('http://10.177.68.63:8082/product/getproduct/' + this.product.productId)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.image = res.images[0]
      })
  }
}
</script>

<style scoped>

.product-card {
  padding: 0 1% 1% 0;
  flex-basis: 24%;
  min-width: 200px;
  background: #323232;
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
