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
  .product{
    border: 1px black solid;
    margin: 10px;
  }
</style>
