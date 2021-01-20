<template>
  <div class="profile">
    <h1>My Profile</h1>
    <b-card no-body class="overflow-hidden mx-auto card" style="max-width: 540px">
      <b-row no-gutters>
      <b-col md="4">
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
        <div class="mt-3">
          <router-link class="btn btn-primary" to="/customerorders">My Orders</router-link>
          <button class="btn btn-outline-primary" @click="toggleEdit">Edit</button>
          <button v-if="edit" class="btn btn-primary" @click="saveEdit">Save</button>
        </div>
      </b-col>
      <b-col md="8">
                <label class="mb-0">Full Name:</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{user.name}}</span>
                  <input v-if="edit" type="text" name="name" id="name" v-model="user.name">
                </div>
                <hr>
          <b-card-text>
                <label class="mb-0">Email</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{user.email}}</span>
                  <input v-if="edit" type="text" name="email" id="email" v-model="user.email">
              </div>
          </b-card-text>
          <hr>
          <b-card-text>
                <label class="mb-0">Phone</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{user.phone}}</span>
                  <input v-if="edit" type="text" name="phone" id="phone" v-model="user.phone">
                </div>
          </b-card-text>
          <hr>
          <b-card-text>
                <label class="mb-0">Address</label>
                <div class="text-secondary">
                  <span v-if="!edit">{{user.address}}</span>
                  <input v-if="edit" type="text" name="address" id="address" v-model="user.address">
                </div>
          </b-card-text>
          <hr>
          <b-card-text v-if="edit">
                <label class="mb-0">Password</label>
                <div class="text-secondary">
                  <input type="password" name="password" id="password" v-model="user.password">
                </div>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    user: {
      email: '',
      password: '',
      name: '',
      address: '',
      phone: ''
    },
    edit: false
  }),
  methods: {
    toggleEdit () {
      this.edit = !this.edit
    },
    saveEdit () {
      // send edit details
      console.log(this.user)
      fetch(('http://10.177.68.63:8082/customerUI/createCustomer'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.user)
      })
        .then((res) => {
          const resp = res.json()
          return resp
        })
        .then((res) => {
          console.log(res)
          this.$store.dispatch('fetchStatus', res)
        })
      this.toggleEdit()
    }
  },
  beforeMount () {
    console.log(this.user)
    this.user.email = this.$store.getters.getEmail
    this.user.name = this.$store.state.user.name
    this.user.address = this.$store.getters.getAddress
    this.user.phone = this.$store.getters.getPhone
    this.user.password = this.$store.getters.getPassword
  }
}
</script>

<style scoped>
body{
  margin: 10%;
    /* margin: 120px auto 0; */
    color: #14ffec;
    text-align: left;
    /* background-color: #121212; */
    /* padding: 15px; */
}
.profile{
  margin: 100px auto 0;
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
span, h1{
  color: #14ffec;
}
hr{
  border-bottom: 1px solid #0D7377;
}
label{
  color:#0D7377;
}
</style>
