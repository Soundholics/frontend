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
      phone: ''
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
label[for], input{
    margin: 10px;
}
.signUp{
    align-content: center;
    margin: auto;
}
.register{
    border: 2px solid black;
    display: block;
    width: 450px;
    margin: 100px auto 0;
    text-align: center;
    padding: 10px;
}
input[name="address"]{
    height: 30px;
}
</style>
