<template>
  <div>
    <h4>{{cartItem.productName}}</h4>
    <h4>{{cartItem.productPrice}}</h4>
    <h4><button>-</button>{{cartItem.productQuanity}}<button>+</button></h4>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['cartItem']
}
</script>

<style>

</style>
