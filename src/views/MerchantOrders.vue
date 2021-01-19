<template>
  <div id="orders">
    <h1>Your Orders</h1>
    <div id="heading">
      <p>Ordered Date</p>
      <p>Order</p>
      <p>Quantity</p>
      <p>Customer Email</p>
    </div>
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
    const data = []
    // fetch data
    fetch('http://10.177.68.63:8082/merchant/' + this.$store.getters.getmerchantEmail)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        res.orderId.forEach(element => {
          fetch('http://10.177.68.63:8082/order/getOrderById/' + element)
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              res.productEntities.forEach((ele) => {
                if (ele.merchantId === this.$store.getters.getmerchantEmail) {
                  data.push({
                    name: element,
                    quantity: ele.quantity,
                    customerEmail: res.customerEmail,
                    date: '21/03/2322'
                  })
                }
              })
            })
        })
      })
    this.orders = data
  }

}
</script>

<style>
#orders{
  margin-top: 10%;
}
#heading{
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border: none;
  border-bottom: 1px solid grey;
}
</style>
