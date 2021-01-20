<template>
  <div id="orders">
    <h1>Your Orders</h1>
    <div class="table">
      <div id="heading">
      <p style="margin-right:160px;">Order ID</p>
      <p>Date Ordered</p>
      <p>Quantity</p>
      <!-- <p>Price</p> -->
    </div>
    <!-- <div v-for="d in date" :key="d">
      <div id="date">
      <label>Order Date:</label>{{d}}
      </div> -->
    <CustomerOrder v-for="order in dataOrder" :key="order._id" :order="order" />
    </div>
      </div>
</template>

<script>
import CustomerOrder from '../components/CustomerOrder'
export default {
  name: 'CustomerOrders',
  components: { CustomerOrder },
  data: () => ({
    orders: [],
    dataOrder: [],
    date: [],
    products: []
  }),
  beforeMount () {
    // const datas = []
    const dat = {}
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
    fetch('http://10.177.68.63:8082/order/getOrder/' + this.$store.getters.getEmail)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        res.forEach((element) => {
          let quantity = 0
          // this.dat.push(element.date)
          dat._id = element._id
          dat.date = element.date
          dat.price = element.totalPrice
          element.productEntities.forEach((element) => {
            quantity += element.quantity
          })
          dat.quantity = quantity
          this.dataOrder.push(dat)
          // this.products = datas
          console.log('data inside fetch vue', this.dataOrder)
        })
        // this.dataOrder.date = res.date
      })
    console.log(this.dataOrder)
    this.orders = data
  }

}
</script>

<style scoped>
#date{
  display: flex;
  justify-content: space-between;
  background-color: #121212;
  color: #14ffec;
}
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
