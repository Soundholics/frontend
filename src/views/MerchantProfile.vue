<template>
  <div class="profile">
    <h1>My Profile</h1>
    <b-card no-body class="overflow-hidden mx-auto card" style="max-width: 540px">
      <b-row no-gutters>
      <b-col md="4">
        <img :src="picture" alt="Admin" class="rounded-circle" width="150">
        <div class="mt-3">
          <button class="btn btn-primary">My Orders</button>
          <button class="btn btn-outline-primary" @click="toggleEdit">Edit</button>
          <button v-if="edit" class="btn btn-primary" @click="saveEdit">Save</button>
        </div>
      </b-col>
      <b-col md="8">
                <label class="mb-0">Full Name:</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{name}}</span>
                  <input v-if="edit" type="text" name="name" id="name" v-model="name">
                </div>
                <hr>
          <b-card-text>
                <label class="mb-0">Email</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{email}}</span>
                  <input v-if="edit" type="text" name="email" id="email" v-model="email">
              </div>
          </b-card-text>
          <hr>
          <b-card-text>
                <label class="mb-0">GST</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{gst}}</span>
                  <input v-if="edit" type="text" name="gst" id="gst" v-model="gst">
                </div>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
    <!-- <div class="row gitters-sm card card-body">
      <div class="d-flex flex-column align-items-center text-center">
        <img :src="picture" alt="Admin" class="rounded-circle" width="150">
        <div class="mt-3">
          <router-link to="/merchantorders" class="style"><button class="btn btn-primary">My Orders</button></router-link>
          <button class="btn btn-outline-primary" @click="toggleEdit">Edit</button>
          <button v-if="edit" class="btn btn-primary" @click="saveEdit">Save</button>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
      <div class="card">
        <div class="mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-3">
                <label class="mb-0">Full Name:</label>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{name}}</span>
                  <input v-if="edit" type="text" name="name" id="name" v-model="name">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <label class="mb-0">Email:</label>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{email}}</span>
                  <input v-if="edit" type="text" name="email" id="email" v-model="email">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <label class="mb-0">GST Number:</label>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{gst}}</span>
                  <input v-if="edit" type="text" name="gst" id="gst" v-model="gst">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MerchantProfile',
  data: () => ({
    picture: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    name: 'Merchant Name',
    email: 'example@example.com',
    gst: '21HGFSDYW2168127',
    edit: false
  }),
  methods: {
    toggleEdit () {
      this.edit = !this.edit
      console.log(22)
    },
    saveEdit () {
      const data = {
        name: this.name,
        email: this.email,
        gst: this.gst
      }
      // send edit details
      console.log(data)
      this.toggleEdit()
    }
  }
  // beforeMount () {
  //   // fetch merchant details
  //   this.name = 'beforeMount'
  //   this.email = 'beforeMountemail'
  //   this.gst = 'beforeMountgst'
  //   console.log(1)
  // }
}
</script>

<style scoped>
body{
    margin-top:10%;
    /* margin: 120px auto 0; */
    color: #14ffec;
    text-align: left;
    /* background-color: #121212; */
    /* padding: 15px; */
}
.profile{
  padding: 18px;
}
.card {
    box-shadow: 0 1px 3px 0 #121212, 0 1px 2px 0 #121212;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #323232;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}
.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}
.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3, .mt-3 {
    margin-bottom: 1rem!important;
}
.btn {
  margin: 4px;
  width: 100px;
  font-size: 15px;
}
.btn-primary{
  background-color: #14ffec;
  color: #0D7377;
}
.btn-outline-primary{
  color: #14ffec;
  background-color: #0D7377;
}
input{
  color:#121212;
}
span{
  color: #14ffec;
}
hr{
  border-bottom: 1px solid #0D7377;
}
</style>
