<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>User Login</h1>
    <form id="login" v-on:submit.prevent>
        <label for="uname"><strong>Username:</strong></label>
        <input type="text" placeholder="User Name" name="uname" required v-model="uname">
        <br>
        <label for="pass"><strong>Password:</strong></label>
        <input type="password" placeholder="Password" name="pass" required v-model="pass">
        <hr>
        <router-link to="/register">Sign up?</router-link>
        <br>
        <input type="submit" placeholder="Submit" name="submit" id="blue" @click="authenticate">
        <br>
        <a href="" class="btn btn-block btn-outline-info"> <i class="fas fa-at"></i>Login via Gmail</a>
<br>
<a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>Login via facebook</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    uname: '',
    pass: ''
  }),
  methods: {
    authenticate () {
      fetch('base_url', { method: 'POST', body: JSON.stringify.data }).then(res => res.json()).then().catch(error => console.error('Error', error))
    }
  }
}
</script>

<style>
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
#blue, .btn{
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
