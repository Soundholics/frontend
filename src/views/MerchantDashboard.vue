<template>
  <div id="merchantDashboard">
    <h1>Dashboard</h1>
    <b-button v-b-modal.modal>Add Product</b-button>
    <button>Delete Product </button>
    <router-link to="/merchantorders" class="style"><button>Show Orders</button></router-link>
    <div id="heading">
      <p>Product Name</p>
      <p>Product Quantity</p>
      <p>Product Quantity</p>
    </div>
    <MerchantProduct v-for="product in products" :key="product.productName" :product="product"/>
    <div>
      <b-modal id="modal" title="Add Product">
        <div>Product Name: <input type="text"></div>
        <div>Quantity: <input type="number"></div>
        <div>Images: <input type="file"></div>
      </b-modal>
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
    fetch('http://10.177.68.63:8082/Inventory/findProducts/' + 'anil@gmail.com')
      .then((res) => res.json())
      .then((res) => {
        this.products = res
      })
  }
}
</script>

<style>
#merchantDashboard{
  border: 2px solid #323232;
  margin: 120px auto 0;
  padding: 10px;
}
button{
  margin: 10px
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
