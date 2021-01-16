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
      //     router.push('/merchantdashboard', onComplete?, onAbort?)
      //   })
      this.$router.push('/merchantdashboard')
      console.log(data)
    }
  }
}

</script>

<style lang="scss" scoped>
.login{
    border: 2px solid #323232;
    background-color: #0D7377;
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
  background-color: #323232;
  color: #14ffec;
  border: none;
}
a{
  color: #14ffec;
}
hr{
  border-top: 1px solid #323232;
}
</style>
