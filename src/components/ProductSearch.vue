<template>
  <div class="productSearch">
      <h2>{{product.productId}}</h2>
      <h3>{{product.category}}</h3>
      <p><strong>Stock remaining: {{product.stock}}</strong></p>
      <p>{{product.attribute}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductSearch',
  data: () => ({
    product: {
      productId: 'prod1',
      category: 'headphone',
      stock: 5,
      attribute: 'okay'
      }
  }),
  props: ['product']
}
</script>

<style>
</style>
