<template>
  <div class="product">
    <label for="productName">Product Name:</label>
    <p>{{product.productName}}</p>
    <label for="quantity">Product Quantity:</label>
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
  .product{
    border: 2px #323232 solid;
    border-bottom: 2px solid #323232;
    margin: 10px;
    padding: 5px;
  }
</style>
