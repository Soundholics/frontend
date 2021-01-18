<template>
  <div class="product">
    <p>{{productName}}</p>
    <p>{{product.quantity}}</p>
    <button>Edit</button>
  </div>
</template>

<script>
export default {
  name: 'MerchantProduct',
  props: ['product'],
  data: () => ({
    productName: ''
  }),
  beforeMount () {
    fetch('http://10.177.68.63:8082/product/getproduct/' + this.product.productId)
      .then((res) => res.json())
      .then((res) => {
        this.productName = res.name
      })
  }
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
