<template>
  <div id="merchantOrder">
    <h1>Orders</h1>
    <MerchantOrder v-for="order in orders" :key="order.name" :order="order" />
  </div>
</template>

<script>
import MerchantOrder from '../components/MerchantOrder'
export default {
  name: 'MerchantOrders',
  components: { MerchantOrder },
  data: () => ({
    orders: []
  }),
  beforeMount () {
    const data = [
      {
        name: 'order 1',
        quantity: 3,
        date: '21/01/2311',
        price: 341
      },
      {
        name: 'order 2',
        quantity: 2,
        date: '21/01/2311',
        price: 124
      },
      {
        name: 'order 3',
        quantity: 4,
        date: '21/01/2311',
        price: 342
      }
    ]
    // fetch data
    // fetch('/merchant/orders/ani')
    //   .then((res)=>res.json())
    //   .then(() => {
    //     this.orders=res
    //   })
    console.log(1)
    this.orders = data
  }

}
</script>

<style>
#merchantOrder{
  margin: 120px auto 0;
  border: 2px solid #323232;
  width: 320px;
  padding: 10px;
  color: #14ffec;
}
</style>
