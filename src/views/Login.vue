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
        <input type="submit" placeholder="Submit" name="submit" @click="authenticate">
        <br>
        <a href="" class="btn btn-block btn-outline-info"> <i class="fab fa-twitter"></i>Login via Twitter</a>
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
