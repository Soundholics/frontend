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
                <h6 class="mb-0">Phone</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{phone}}</span>
                  <input v-if="edit" type="text" name="phone" id="phone" v-model="phone">
                </div>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-xl-3">
                <h6 class="mb-0">Address</h6>
                <div class="col-xl-9 text-secondary">
                  <span v-if="!edit">{{address}}</span>
                  <input v-if="edit" type="text" name="address" id="address" v-model="address">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    picture: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    email: '',
    name: 'Sound Holics',
    address: '',
    phone: 0,
    edit: false
  }),
  methods: {
    authenticate () {
      fetch('base_url', { method: 'POST', body: JSON.stringify.data }).then(res => res.json()).then().catch(error => console.error('Error', error))
    },
    toggleEdit () {
      this.edit = !this.edit
    },
    saveEdit () {
      const data = {
        name: this.name,
        email: this.email,
        address: this.address,
        phone: this.phone
      }
      // send edit details
      console.log(data)
      this.toggleEdit()
    }
  }
}
</script>

<style>
body{
    margin-top:20%;
    /* margin: 120px auto 0; */
    color: #14ffec;
    text-align: left;
    /* background-color: #121212; */
    /* padding: 15px; */
}
.profile{
  padding: 15px;
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
</style>
