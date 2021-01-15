<template>
  <div>
    <h1>Dashboard</h1>
    <button>Add Product</button>
    <button>Delete Product </button>
    <router-link to="/merchantorders" class="style"><button>Show Orders</button></router-link>
    <MerchantProduct v-for="product in products" :key="product.productName" :product="product"/>
  </div>
</template>

<script>
import MerchantProduct from '../components/MerchantProduct'
export default {
  components: { MerchantProduct },
  name: 'MerchantDashboard',
  data: () => ({
    products: []
  }),
  beforeMount () {
    const data = [
      {
        productName: 'product 1',
        quantity: 3,
        price: 341
      },
      {
        productName: 'product 2',
        quantity: 2,
        price: 124
      },
      {
        productName: 'product 3',
        quantity: 4,
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
    this.products = data
  }
}
</script>

<style>

</style>
