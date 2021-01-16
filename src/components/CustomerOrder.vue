<template>
  <div class="order">
    <p>{{order.date}}</p>
    <img src="https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg" alt="">
    <p>{{order.name}}</p>
    <p>{{order.quantity}}</p>
    <p>{{order.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'CustomerOrder',
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
