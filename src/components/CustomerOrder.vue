<template>
  <div class="order">
    <p>{{order.date}}</p>
    <!-- <img :img-src="this.image" alt="Image of product"> -->
    <img src="../assets/earbud.svg" alt="">
    <p>{{order.name}}</p>
    <p>{{order.quantity}}</p>
    <p>{{order.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'CustomerOrder',
  props: ['order'],
  data: () => ({
    name: '',
    date: '',
    price: '',
    quantity: ''
  })
  // mounted () {
  //   fetch('http://10.177.68.63:8082/product/getproduct/' + this.order.productId)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       this.name = res.name
  //       this.image = res.images[0]
  //     })
  //   fetch('http://10.177.68.63:8082/Inventory/findSpecificPrice/' + this.order.productId + '/' + this.order.merchantId)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res)
  //       this.price = res
  //     })
  // }
}
</script>

<style>
.order {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #323232;
  border-bottom: 1px solid #0D7377;
}

img {
  max-height: 100px;
}

</style>
