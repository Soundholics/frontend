<template>
 <div class="register">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Create Seller Account</h1>
    <form id="login" v-on:submit.prevent>
        <label for="email"><strong>E-Mail:</strong></label>
        <input type="email" placeholder="Email" name="email" required v-model="email">
        <br>
        <label for="pass"><strong>Password:</strong></label>
        <input type="password" placeholder="Password" name="pass" required v-model="password" minlength="8">
        <br>
        <label for="name"><strong>Name:</strong></label>
        <input type="text" placeholder="Name" name="name" required v-model="name">
        <br>
        <label for="address"><strong>GST Number:</strong></label>
        <input type="text" placeholder="GST Number" name="gst" required v-model="gstno">
        <br>
        <input type="submit" placeholder="Submit" name="submit" @click="register">
        <br>
        </form>
  </div>
</template>

<script>
export default {
  name: 'MerchantRegistration',
  data: () => ({
    name: '',
    email: '',
    password: '',
    gstno: ''
  }),
  methods: {
    register () {
      const data = {
        merchantName: this.name,
        merchantId: this.email,
        password: this.password,
        gstPin: this.gstno
      }
      // fetch('merchant/save', {
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

<style scoped>
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
  color: #323232;
}
</style>
