 <template>
<b-container fluid>
    <b-row>
        <b-col class="carded">
      <img class="card-img-top" src="../assets/earphone-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{productItem[0].name}}</h5>
                <p class="card-text">{{productItem[0].category}}</p>
      </div>
        </b-col>
        <b-col class="carded">
      <img class="card-img-top" src="../assets/audioplayer-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{productItem[1].name}}</h5>
                <p class="card-text">{{productItem[1].category}}</p>
      </div>
        </b-col>
                <b-col class="carded">
      <img class="card-img-top" src="../assets/earbuds-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{productItem[2].name}}</h5>
                <p class="card-text">{{productItem[2].category}}</p>
      </div>
        </b-col>
    </b-row>
        <b-row>
                <b-col class="carded">
      <img class="card-img-top" src="../assets/speaker-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{productItem[3].name}}</h5>
                <p class="card-text">{{productItem[3].category}}</p>
      </div>
        </b-col>
        <b-col class="carded">
      <img class="card-img-top" src="../assets/headphone-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{productItem[4].name}}</h5>
        <p class="card-text">{{productItem[4].category}}</p>
      </div>
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
