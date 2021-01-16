<template>
  <div class="order">
    <label for="orderName">Name:</label>
    <p>{{order.name}}</p>
    <label for="orderQuantity">Quantity:</label>
    <p>{{order.quantity}}</p>
    <label for="orderDate">Date:</label>
    <p>{{order.date}}</p>
    <label for="orderPrice">Price:</label>
    <p for="orderPrice">{{order.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'MerchantOrder',
  props: ['order']
}
</script>

<style>
  .order{
    border: 2px solid #323232;
    margin: 10px;
    padding: 5px;
  }
</style>
