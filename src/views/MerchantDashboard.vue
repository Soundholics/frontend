<template>
  <div id="merchantDashboard">
    <h1>Dashboard</h1>
    <button>Add Product</button>
    <button>Delete Product </button>
    <router-link to="/merchantorders" class="style"><button>Show Orders</button></router-link>
    <MerchantProduct v-for="product in products" :key="product.productName" :product="product"/>
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add Product</h4>
          </div>
          <div class="modal-body">
            <div>Product Name<input type="text"></div>
            <div>Quantity<input type="text"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>

      </div>
    </div>
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
#merchantDashboard{
  border: 2px solid #323232;
  width: fit-content;
  margin: 120px auto 0;
  padding: 10px;
  color: #14ffe7;
}
button{
  background-color: #323232;
  margin: 10px
}
</style>
