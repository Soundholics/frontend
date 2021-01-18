<template>
  <div class="search">
    <nav class="product-filter">
      <h1>Search Results</h1>
      <div class="sort">
        <div class="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
          </select>
        </div>
      </div>
    </nav>
    <div id="results">
      <div id="filters">
        <div v-for="(value, key) in this.filterData" :key="key">
          <h5>{{key}}</h5>
          <ul>
            <li v-for="entry in value" :key="entry"><input type="checkbox" name="" id="">{{entry}}</li>
          </ul>
        </div>
      </div>
      <section class="products">
        <SearchResult v-for="product in products" v-bind:key="product.productId" :product="product"/>
      </section>
    </div>
  </div>

</template>

<script>
import SearchResult from '../components/SearchResult'
export default {
  name: 'Search',
  components: { SearchResult },
  data: () => ({
    products: [
      {
        productId: 'id1',
        productName: 'Product Name',
        price: 599,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id2',
        productName: 'Product Name',
        price: 499,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id3',
        productName: 'Product Name',
        price: 799,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id4',
        productName: 'Product Name',
        price: 599,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id5',
        productName: 'Product Name',
        price: 199,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id7',
        productName: 'Product Name',
        price: 299,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id8',
        productName: 'Product Name',
        price: 299,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id9',
        productName: 'Product Name',
        price: 299,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      },
      {
        productId: 'id10',
        productName: 'Product Name',
        price: 299,
        image: 'https://media.wired.com/photos/59e95567ce22fd0cca3c5262/master/w_2560%2Cc_limit/1M9A0509_V3.jpg'
      }
    ],
    filterData: {
      price: ['Rs. 498 and Below', 'Rs. 499 - 998', 'Rs. 999 - 1498', 'Rs. 1499 - 1998', 'Rs. 1999 - 2498', 'Rs. 2499 - 4998', 'Rs. 4999 and Above'],
      brand: ['JBL', 'SkullCandy', 'Sony', 'Bose', 'Sennheiser', 'Ubon', 'Boat', 'Samsung', 'Apple'],
      colors: ['Red', 'Black', 'Blue', 'Green', 'Cyan', 'Olive', 'Purple', 'Brown'],
      ergonomics: ['Wired', 'WireLess'],
      category: ['headphones', 'earphones', 'earbuds', 'audio players', 'speakers'],
      rating: ['5 stars', '4 stars', '3 stars', '2 star and above'],
      stock: ['exclude out of stock']
    }
  })
}
</script>

<style scoped>
.search {
  margin: 10% auto 2%;
  color: #14ffec;
}
.product-filter {
  display: flex;
  justify-content: space-between;
}
label{
  font-weight: bold;
  text-align:left;
}
.product-filter h1 {
  padding-left: 2%;
}
.product-filter #spacer {
  flex-grow: 1;
}
.sort {
  display: flex;
  padding-right: 2%;
}
.collection-sort {
  display: flex;
  flex-direction: column;
}
.products {
  display: flex;
  flex-wrap: wrap;
}
#results{
  display: flex;
  margin-top: 30px;
  background: #323232;
}
#filters{
  margin: 0 1%;
  min-width: 20%;
  background: #323232;
  /* max-height: 600px; */
  border-right: lightgray 1px solid;
  text-align: left;
}
input[type="checkbox"]{
  margin-right: 5px;
}
ul {
  list-style: none;
  padding-left: 0;
}
</style>
