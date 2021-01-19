<template>
  <div class="order">
    <p>{{order.date}}</p>
    <p>{{order.name}}</p>
    <p>{{order.quantity}}</p>
    <p>{{order.customerEmail}}</p>
  </div>
</template>

<script>
export default {
  name: 'MerchantOrder',
  props: ['order']
}
</script>

<style>
.order {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border: none;
}

img {
  max-height: 100px;
}
</style>
