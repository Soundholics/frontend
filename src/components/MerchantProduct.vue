<template>
  <div class="product">
    <p>{{productName}}</p>
    <input v-if="this.edit" type="text" name="quantity" id="quantity" :value="product.quantity" v-bind="stock">
    <p v-if="!this.edit">{{product.quantity}}</p>
    <input v-if="this.edit" type="text" name="price" id="price" :value="product.price" v-bind="price">
    <p v-if="!this.edit">{{product.price}}</p>

    <button v-if="this.edit" @click="saveEdit">Save</button>
    <button v-if="!this.edit" @click="toggleEdit">Edit</button>
  </div>
</template>

<script>
export default {
  name: 'MerchantProduct',
  props: ['product'],
  data: () => ({
    productName: '',
    edit: false,
    stock: 0,
    price: 0
  }),
  methods: {
    toggleEdit () {
      this.edit = !this.edit
    },
    saveEdit () {
      fetch('http://10.177.68.63:8082/Inventory/price/' + this.product.productId + '/' + this.$store.getters.getmerchantEmail + '/' + document.getElementById('price').value, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          console.log(1)
        })
      fetch('http://10.177.68.63:8082/Inventory/quantity/' + this.product.productId + '/' + this.$store.getters.getmerchantEmail + '/' + document.getElementById('quantity').value, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          console.log(1)
        })
      this.toggleEdit()
    }
  },
  beforeMount () {
    fetch('http://10.177.68.63:8082/product/getproduct/' + this.product.productId)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.productName = res.name
      })
  }
}
</script>

<style>
.product {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: white;
  border: none;
}
</style>
