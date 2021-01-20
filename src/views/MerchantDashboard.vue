<template>
  <div id="merchantDashboard">
    <h1>Dashboard</h1>
    <b-button v-b-modal.modal id="modalButton">Add Product</b-button>
    <router-link to="/merchantorders" class="style"><button>Show Orders</button></router-link>
    <div id="heading">
      <p>Product Name</p>
      <p>Product Quantity</p>
      <p>Product Price</p>
      <p>Product Quantity</p>
    </div>
    <MerchantProduct v-for="product in products" :key="product.productName" :product="product"/>
    <div id="modals">
      <b-modal id="modal" title="Add Product">
        <div><label>Product Name:</label>
          <select v-if="!addNewProduct" v-model="product.name" >
              <option v-for="entry in productList" :key="entry.productId">{{entry.name}}</option>
          </select>
          <input v-if="addNewProduct" v-model="product.name" type="text" placeholder="Add new product">
          <button @click="toggleNewProduct">Add new product</button>
        </div>
        <div><label>Quantity:</label><input type="number" v-model="inventory.quantity"></div>
        <div><label>Features:</label><br>
        <label>Price:</label>
            <input type="text" v-model="inventory.price">
            <label>Brand:</label>
                        <select v-model="brand" text="Brand" name="Brand">
              <option v-for="entry in brandList" :key="entry">{{entry}}</option>
            </select>
            <label>Ergonomics:</label>
                        <select v-model="ergonomics" text="Ergonomics">
              <option v-for="entry in ergonomicsList" :key="entry">{{entry}}</option>
            </select>
            <label>Colors:</label>
                        <select v-model="colors" text="Colors">
              <option v-for="entry in colorsList" :key="entry">{{entry}}</option>
            </select>
            <label>Category:</label>
                        <select v-model="product.category" text="Category">
              <option v-for="entry in categoryList" :key="entry">{{entry}}</option>
            </select>
        <div>
          <label>Images:</label><input type="text" v-model="image" id="image"> <button @click="addImage">Add More Images</button></div>
        {{this.product.images}}
        <button @click="addProduct">Submit</button>
        </div>
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
    products: {
    //   name: '',
    //   category: '',
    //   attributes: []
    },
    product: {
      name: '',
      category: '',
      attribute: [],
      images: []
    },
    inventory: {
      price: 0.0,
      quantity: 0,
      merchant_id: '',
      product_id: ''
    },
    image: '',
    stock: '',
    brand: '',
    colors: '',
    ergonomics: '',
    quantity: '',
    price: '',
    productList: [],
    priceList: ['Rs. 498 and Below', 'Rs. 499 - 998', 'Rs. 999 - 1498', 'Rs. 1499 - 1998', 'Rs. 1999 - 2498', 'Rs. 2499 - 4998', 'Rs. 4999 and Above'],
    brandList: ['JBL', 'SkullCandy', 'Sony', 'Bose', 'Sennheiser', 'Ubon', 'Boat', 'Samsung', 'Apple'],
    colorsList: ['Red', 'Black', 'Blue', 'Green', 'Cyan', 'Olive', 'Purple', 'Brown'],
    ergonomicsList: ['Wired', 'WireLess'],
    categoryList: ['headphones', 'earphones', 'earbuds', 'audio players', 'speakers'],
    stockList: ['exclude out of stock'],
    addNewProduct: false
  }),
  beforeMount () {
    fetch('http://10.177.68.63:8082/Inventory/findProducts/' + this.$store.getters.getmerchantEmail)
      .then((res) => res.json())
      .then((res) => {
        this.products = res
      })
    fetch('http://10.177.68.63:8082/product/getallproducts')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.productList = res
      })
  },
  methods: {
    toggleNewProduct () {
      this.addNewProduct = !this.addNewProduct
    },
    addImage () {
      this.product.images.push(this.image)
      this.image = ''
      document.getElementById('image').nodeValue = ''
    },
    addProduct () {
      this.product.attribute = [
        {
          attributeKey: 'brand',
          getAttributeValue: this.brand
        },
        {
          attributeKey: 'colors',
          getAttributeValue: this.colors
        },
        {
          attributeKey: 'ergonomics',
          getAttributeValue: this.ergonomics
        },
        {
          attributeKey: 'price',
          getAttributeValue: this.price
        }]
      console.log(this.product)
      fetch('http://10.177.68.63:8082/product/addproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.product)
      }).then(res => res.json())
        .then(res => {
          console.log(res)
          this.inventory.productId = res.productId
          this.inventory.merchantId = this.$store.getters.getmerchantEmail
          fetch('http://10.177.68.63:8082/Inventory/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.inventory)
          }).then(res => res.json())
            .then(res => {
              console.log(res)
              fetch('http://10.177.68.63:8082/Inventory/findProducts/' + this.$store.getters.getmerchantEmail)
                .then((res) => res.json())
                .then((res) => {
                  this.products = res
                })
            })

          const searchObj = {}
          searchObj.productId = res.productId
          searchObj.productName = res.name
          searchObj.category = res.category
          searchObj.stock = res.stock
          searchObj.attribute = ''

          for (const index in this.product.attribute) {
            searchObj.attribute += this.product.attribute[index].attributeKey
            searchObj.attribute += ';'
            searchObj.attribute += this.product.attribute[index].getAttributeValue
            searchObj.attribute += ';'
          }
          console.log(searchObj)
          fetch('http://10.177.68.63:8082/search/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(searchObj)
          })
            .then((res) => {
              console.log(res)
            })
        })
      this.product.images = []
      this.stock = ''
      this.brand = ''
      this.colors = ''
      this.ergonomics = ''
      this.quantity = ''
      this.price = ''
    }
  }
}
</script>

<style>
div#merchantDashboard{
  /* border: 2px solid #323232; */
  margin: 120px auto 0;
  padding: 10px;
}
button, #modalButton{
  margin: 10px;
  background-color: #14ffec;
  color: #323232;
  border: none;
  box-shadow: 1px 2px #121212;
  border-radius: 6px;
}
#modalButton{
  width: fit-content;
}
#heading{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #323232;
    color: #14ffec;
    border: none;
    border-bottom: 1px solid grey;
}
select, input{
  width: 100%;
  height: 30px;
  margin: 7px;
  border: 1px solid #323232;
  box-shadow: 1px 2px #121212;
}
button.dropdown-toggle{
width: 100%;
}
ul.dropdown-menu{
  width: 100%;
}
</style>
