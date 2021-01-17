<template>
  <div class="product">
    <p>{{product.productName}}</p>
    <p>{{product.quantity}}</p>
    <button>Edit</button>
  </div>
</template>

<script>
export default {
  name: 'MerchantProduct',
  props: ['product']
}
</script>

<style>
.product {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border: none;
}
</style>
