 <template>
<b-container fluid>
    <b-row>
        <b-col class="carded">
          <router-link :to="'/product/' + productItem[0].productId">
          <img class="card-img-top" :src="productItem[0].images[0]" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{productItem[0].name}}</h5>
            <p class="card-text">{{productItem[0].category}}</p>
          </div>
          </router-link>
        </b-col>
        <b-col class="carded">
          <router-link :to="'/product/' + productItem[1].productId">
          <img class="card-img-top" :src="productItem[1].images[0]" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{productItem[1].name}}</h5>
            <p class="card-text">{{productItem[1].category}}</p>
          </div>
          </router-link>
        </b-col>
        <b-col class="carded">
          <router-link :to="'/product/' + productItem[2].productId">
          <img class="card-img-top" :src="productItem[2].images[0]" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{productItem[2].name}}</h5>
            <p class="card-text">{{productItem[2].category}}</p>
          </div>
          </router-link>
        </b-col>
    </b-row>
    <b-row>
        <b-col class="carded">
          <router-link :to="'/product/' + productItem[3].productId">
          <img class="card-img-top" :src="productItem[3].images[0]" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{productItem[3].name}}</h5>
            <p class="card-text">{{productItem[3].category}}</p>
          </div>
          </router-link>
        </b-col>
        <b-col class="carded">
          <router-link :to="'/product/' + productItem[4].productId">
          <img class="card-img-top" :src="productItem[4].images[0]" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{productItem[4].name}}</h5>
            <p class="card-text">{{productItem[4].category}}</p>
          </div>
          </router-link>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
  name: 'Card',
  props: ['productItem']
}
</script>

<style>
    .card-img-top{
        height: 250px;
        width: 50px;
        color: #323232;
    }
    .carded{
        background-color: #323232;
        margin:7px;
        width: fit-content;
        padding: 10px;
    }
</style>
