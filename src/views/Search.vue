<template>
  <div class="search">
    <h1>Search Results</h1>
      <SearchResult v-for="product in products" v-bind:key="product.productId" :product="product" />
  </div>
</template>

<script>
import SearchResult from '../components/SearchResult'
export default {
  name: 'Search',
  components: { SearchResult },
  data: () => ({
    products: [
      {
        productId: 'id',
        category: 'vcar',
        stock: 23423,
        attribute: 'fdeee'
      },
      {
        productId: 'id2',
        category: 'vcaradqw',
        stock: 2323,
        attribute: 'fdawwweee'
      }
    ]
  })
}
</script>

<style>
.search{
  margin: 120px auto 0;
  border: 2px solid #323232;
  width: 450px;
  padding: 10px;
  color: #14ffec
}
</style>
