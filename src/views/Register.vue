<template>
  <div class="register">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Create Account</h1>
    <form id="login" v-on:submit.prevent>
        <label for="email"><strong>E-Mail:</strong></label>
        <input type="email" placeholder="Email" name="email" required v-model="user.email">
        <br>
        <label for="pass"><strong>Password:</strong></label>
        <input type="password" placeholder="Password" name="pass" required v-model="user.pass" minlength="8">
        <br>
        <label for="name"><strong>Name:</strong></label>
        <input type="text" placeholder="Name" name="name" required v-model="user.name">
        <br>
        <label for="address"><strong>Address:</strong></label>
        <input type="text" placeholder="Address" name="address" required v-model="user.address">
        <br>
        <label for="phone"><strong>Phone Number:</strong></label>
        <input type="tel" placeholder="Phone No." name="phone" required v-model="user.phone">
        <hr>
        <input type="submit" placeholder="Submit" name="submit" @click="register">
        <br>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    user: {
      email: '',
      pass: '',
      name: '',
      address: '',
      phone: 0
    }
  }),
  methods: {
    register: function () {
    //   fetch('base_url', { method: 'POST', body: JSON.stringify(this.user) }).then(res => console.log(res)).catch(error => console.error('Error', error))
      console.log(JSON.stringify(this.user))
    }
  }
}
</script>

<style>
.register{
  box-shadow: 3px 6px #121212;
  background-color: #323232;
    width: fit-content;
    margin: 120px auto 0;
    padding: 10px;
    color: #14ffec;
}
label[for], input{
    margin: 10px;
}
input[type="submit"]{
    background-color: #121212;
    color: #14ffec;
}
input[type="submit"]:hover{
    background-color: #0D7377;
    color: white;
}
input{
  color:#323232
}
</style>
