 <template>
<b-container fluid>
    <b-row>
        <b-col class="carded">
      <img class="card-img-top" src="../assets/earphone-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Earphone</h5>
      </div>
        </b-col>
                <b-col class="carded">
      <img class="card-img-top" src="../assets/headphone-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Headphone</h5>
      </div>
        </b-col>
                <b-col class="carded">
      <img class="card-img-top" src="../assets/earbuds-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Earbuds</h5>
      </div>
        </b-col>
                <b-col class="carded">
      <img class="card-img-top" src="../assets/audioplayer-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Audio Player</h5>
      </div>
        </b-col>
                <b-col class="carded">
      <img class="card-img-top" src="../assets/speaker-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Speaker</h5>
      </div>
        </b-col>
    </b-row>
</b-container>
 <!-- <div class="cards">
    <div class="card">
      <img class="card-img-top" src="../assets/earphone-temp.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Earphone</h5>
      </div>
    </div>
 </div> -->
  </template>

<script>
export default {
  name: 'Card'
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
