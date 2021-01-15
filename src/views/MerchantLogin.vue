<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Seller Login</h1>
    <form id="login" v-on:submit.prevent>
      <label for="uname"><strong>Username:</strong></label>
      <input type="text" placeholder="Username" name="uname" required v-model="username">
      <br>
      <label for="pass"><strong>Password:</strong></label>
      <input type="password" placeholder="Password" name="pass" required v-model="password">
      <hr>
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
    password: ''
  }),
  methods: {
    login () {
      const data = {
        username: this.username,
        password: this.password
      }
      // fetch('merchant/getAuthentication', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      //   .then((res) => {
      //     res.json()
      //   })
      //   .then(() => {
      //     console.log(1)
      //   })
      console.log(data)
    }
  }
}

</script>

<style lang="scss" scoped>
label[for], input{
    margin: 10px;
}
.signUp{
    align-content: center;
    margin: auto;
}
.login{
    border: 2px solid black;
    display: block;
    width: 450px;
    margin: 100px auto 0;
    text-align: center;
    padding: 10px;
}
</style>
