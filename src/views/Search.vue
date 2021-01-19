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
            <li v-for="entry in value" :key="entry">
              <input type="checkbox" name="" id="" :value="entry" v-model="selected">{{entry}}
            </li>
          </ul>
        </div>
        <button @click="applyFilters">Apply</button>
      </div>
      <section class="products">
        <SearchResult v-for="product in products" v-bind:key="product.productId" :product="product"/>
      </section>
      selected {{selected}}
    </div>
  </div>

</template>

<script>
import SearchResult from '../components/SearchResult'
export default {
  name: 'Search',
  components: { SearchResult },
  data: () => ({
    products: [],
    selected: [],
    filterData: {
      brand: ['JBL', 'SkullCandy', 'Sony', 'Bose', 'Sennheiser', 'Ubon', 'Boat', 'Samsung', 'Apple'],
      colors: ['Red', 'Black', 'Blue', 'Green', 'Cyan', 'Olive', 'Purple', 'Brown'],
      ergonomics: ['Wired', 'WireLess'],
      category: ['headphones', 'earphones', 'earbuds', 'audio players', 'speakers']
    }
  }),
  methods: {
    applyFilters () {
      let result = ''
      this.selected.forEach(element => {
        result += (element + ';')
      })
      fetch('http://10.177.68.63:8082/search/searching/' + result)
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          this.products = res
        })
    }
  },
  beforeMount () {
    fetch('http://10.177.68.63:8082/search/searching/' + this.$route.params.searchTerm)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.products = res
      })
  }
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
