<template>
  <div class="login">
      <ProductSearch v-for="product in products" v-bind:key="product.productId" v-bind:category="product.category" v-bind:stock="product.stock" v-bind:attribute="product.attribute"></ProductSearch>
  </div>
</template>

<script>
import ProductSearch from 'src/components/ProductSearch.vue'
export default {
  name: 'Search',
  components: {
    ProductSearch: {productId:'prod1',category:'headphone',stock:5,attribute:'okay'}
  },
  data: () => ({
      products
  })
}
</script>

<style>
</style>
