<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Seller Login</h1>
    <b-avatar size="5rem"></b-avatar>
    <form id="login" v-on:submit.prevent>
      <label for="uname"><strong>Username:</strong></label>
      <input type="text" placeholder="Username" name="uname" required v-model="username">
      <br>
      <label for="pass"><strong>Password:</strong></label>
      <input type="password" placeholder="Password" name="pass" required v-model="password">
      <hr>
      <p v-if="incorrect" >Incorrect Credentials</p>
      <router-link to="/merchantregister">Not a User? Register</router-link>
      <br>
      <input type="submit" placeholder="Submit" name="submit" @click="login">
      <br>

    </form>
  </div>
</template>

<script>
export default {
  name: 'MerchantLogin',
  data: () => ({
    username: '',
    password: '',
    incorrect: false
  }),
  methods: {
    login () {
      fetch('http://10.177.68.63:8082/merchant/' + this.username)
        .then((res) => res.json())
        .then((res) => {
          this.$store.dispatch('fetchStatus', res)
          if (res.password === this.password) {
            this.$router.push('/merchantdashboard')
          } else {
            this.incorrect = true
          }
        })
    }
  }
}

</script>

<style>
.login{
    /* border: 2px solid #323232; */
    box-shadow: 3px 6px #121212;
    background-color: #323232;
    /* display: block; */
    width: fit-content;
    margin: 120px auto 0;
    /* text-align: center; */
    padding: 10px;
    color: #14ffec;
}
label[for], input{
    margin: 10px;
}
input[type="submit"]{
  background-color: #121212;
  color: #14ffec;
  border: none;
}
a{
  color: #14ffec;
}
hr{
  border-top: 1px solid #323232;
}
.b-avatar{
  margin: 10px;
}
</style>
