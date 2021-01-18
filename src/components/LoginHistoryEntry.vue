<template>
  <div class="order">
    <p>{{entry.date}}</p>
    <p>USD {{entry.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'LoginHistoryEntry',
  props: ['entry']
}
</script>

<style>
.order {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #323232;
  color: #14ffec;
  border: none;
}

img {
  max-height: 100px;
}

</style>
