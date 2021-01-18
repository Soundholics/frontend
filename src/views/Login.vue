<template>
  <div class="login">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>User Login</h1>
    <b-avatar size="5rem"></b-avatar>
    <form id="login" v-on:submit.prevent>
        <label for="uname"><strong>Username:</strong></label>
        <input type="text" placeholder="User Name" name="uname" required v-model="uname">
        <br>
        <label for="pass"><strong>Password:</strong></label>
        <input type="password" placeholder="Password" name="pass" required v-model="pass">
        <hr>
        <p v-if="this.incorrect">Incorrect Credentials</p>
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
    pass: '',
    incorrect: false
  }),
  methods: {
    authenticate () {
      fetch('http://10.177.68.63:8082/customerUI/' + this.uname)
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          if (res.password === this.pass) {
            this.$router.push('/')
          } else {
            this.incorrect = true
          }
        })
        .catch(error => console.error('Error', error))
    }
  }
}
</script>

<style scoped>
.login{
    /* border: 2px solid #121212; */
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
#blue, .btn{
  background-color: #121212;
  color: #14ffec;
  border: none;
  font-size:15px;
}
#blue:hover{
  background-color: #0D7377;
  color: white;
}
a{
  color: #14ffec;
  font-size: 15px;
}
hr{
  border-top: 1px solid #121212;
}
.b-avatar{
  margin: 10px;
}
</style>
