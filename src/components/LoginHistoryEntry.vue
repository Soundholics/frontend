<template>
  <div class="order">
    <p>{{entry.date}}</p>
    <p>{{entry.price}}</p>
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
  justify-content: space-between;
  padding: 20px;
  background: white;
  border: none;
}

img {
  max-height: 100px;
}

</style>
