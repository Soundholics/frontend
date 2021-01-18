<template>
  <div id="orders">
    <h1>Your Orders</h1>
    <div class="table">
      <div id="heading">
      <p>Ordered Date</p>
      <p>Image</p>
      <p>Product Name</p>
      <p>Quantity</p>
      <p>Price</p>
    </div>
    <CustomerOrder v-for="order in orders" :key="order.name" :order="order" />
      </div>
  </div>
</template>

<script>
import CustomerOrder from '../components/CustomerOrder'
export default {
  name: 'MerchantOrders',
  components: { CustomerOrder },
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

<style scoped>
#orders{
  margin: 10%;
  color: #14ffec;
}
.table{
    color: #14ffec;
  box-shadow: 3px 6px #121212;
}
#heading{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #323232;
    border: none;
    border-bottom: 2px solid #0D7377;
    font-weight: bold;
}
</style>
