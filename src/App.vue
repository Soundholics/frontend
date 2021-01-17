<template>
  <div id="app">
      <b-navbar toggleable="md" type="dark" variant="dark" fixed="top" id="nav"> <!-- class navbar id nav-->
        <b-navbar-brand class="right">
        <router-link to="/" class="style"><b-icon icon="headphones" class="style" aria-hidden="true"></b-icon>Soundholics</router-link>
        </b-navbar-brand>
        <b-nav-form class="mx-auto" style="width:200px">
          <b-form-input class="mx-auto" placeholder="Search"></b-form-input>
          <b-button class="style mx-auto" to="/search">Search</b-button>
        </b-nav-form>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="justify-content-end" is-nav> <!--style="max-width:17rem;"-->
          <b-navbar-nav class="ms-auto">
            <b-nav-item to="/merchantlogin" class="style">Seller Login</b-nav-item>
            <b-nav-item to="/login" class="style">Login</b-nav-item>
            <b-nav-item to="/cart" class="style"><b-icon icon="cart4" aria-hidden="true"></b-icon>Cart</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <router-view/>
    <footer id="footer">
      <div class="left">
        <router-link to="/"><b-icon-house-fill></b-icon-house-fill>Home</router-link>
        <router-link to="/about"><b-icon-info-circle-fill></b-icon-info-circle-fill>About</router-link>
        <a href = "mailto: abc@example.com"><b-icon-telephone-fill></b-icon-telephone-fill>Contact Us</a>
      </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 100%;
    background-color: #121212;
    color: #14ffec;
}
.left{
  display: flex;
  justify-content: space-around;
}
#app {
    background-color: #0D7377;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a.style{
  font-size: 18px;
}
.navbar-dark .navbar-nav .nav-link{
  color: #14ffec !important;
  font-size: 18px;
}
.form-control-sm{
  width: 2rem;
}
form.form-inline{
  flex-wrap: nowrap;
}
.style{
  color: #14ffec;
}
.btn.btn-secondary{
background-color: #14ffec;
  border: #14ffec;
  color:#0D7377;
}
#nav.bg-dark{
  background-color: #121212 !important;
}
#footer a{
  color:#14ffec;
}
</style>
