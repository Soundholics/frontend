<template>
  <div class="login">
    <nav class="product-filter">
      <h1>Search Results</h1>
      <div id="spacer"></div>
      <div class="sort">

        <div class="collection-sort">
          <label>Filter by:</label>
          <select>
            <option value="/">All Jackets</option>
          </select>
        </div>

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
        <p>filter 1</p>
        <p>filter 2</p>
        <p>filter 3</p>
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
    ]
  })
}
</script>

<style scoped>
.product-filter {
  display: flex;
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
}
#filters{
  margin: 1% 3%;
  min-width: 15%;
}
</style>
