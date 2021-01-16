<template>
  <div class="productSearch">
    <label for="id">Id:</label>
      <p>{{product.productId}}</p>
      <label for="cat">Category:</label>
      <p>{{product.category}}</p>
      <label for="stock">Stock Remaining:</label>
      <p>{{product.stock}}</p>
      <label for="attribute">Attributes:</label>
      <p>{{product.attribute}}</p>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  props: ['product']
}
</script>

<style>
.productSearch{
  border: 2px solid #323232;
  margin: 10px;
}
</style>
