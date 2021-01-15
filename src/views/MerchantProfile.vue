<template>
  <div class="profile">
    <h1>My Profile</h1>
    <div class="row gitters-sm card card-body">
      <div class="d-flex flex-column align-items-center text-center">
        <img :src="picture" alt="Admin" class="rounded-circle" width="150">
        <div class="mt-3">
          <button class="btn btn-primary">My Orders</button>
          <button class="btn btn-outline-primary" @click="toggleEdit">Edit</button>
          <button v-if="edit" class="btn btn-outline-primary" @click="saveEdit">Save</button>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
      <div class="card">
        <div class="mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Full Name</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{name}}</span>
                  <input v-if="edit" type="text" name="name" id="name" v-model="name">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Email</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{email}}</span>
                  <input v-if="edit" type="text" name="email" id="email" v-model="email">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">GST Number</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{gst}}</span>
                  <input v-if="edit" type="text" name="gst" id="gst" v-model="gst">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>
    <div v-if="!edit">
      <p>Name: <span >{{name}}</span></p>
      <p v-if="edit" >Password: </p>
      <p>Email: <span >{{email}}</span></p>
      <p>GST No: <span >{{gst}}</span></p>
      <button  id="edit" @click="toggleEdit">Edit</button>
    </div>
    <div v-if="edit">
      <input type="text" name="name" id="name" v-model="name">
      <input  type="text" name="" id="">
      <input type="text" name="email" id="email" v-model="email">
      <input type="text" name="gst" id="gst" v-model="gst">
      <button id="saveEdit" @click="saveEdit">Save</button>
    </div>
  </div> -->
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

<style>
body{
    margin-top:20%;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
}
.profile {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
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
}
</style>
