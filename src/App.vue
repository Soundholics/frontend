<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | -->
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <router-link to="/" class="navbar-brand style" style="display:inline"><span class="glyphicon glyphicon-headphones style" aria-hiddent="true"></span>Soundholics</router-link>
            <button type="button" class="navbar-toggle collapsed ml-auto" data-toggle="collapse" data-target="#bs-nav-demo" aria-controls="bs-nav-demo" aria-expanded="false" aria-label="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <!-- <div class="collapse navbar-collapse" id="bs-nav-demo"> -->
            <!-- <ul class="nav navbar-nav">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul> -->
            <ul class="nav navbar-nav navbar-right collapse navbar-collapse" id="bs-nav-demo">
              <li><router-link to="/merchantlogin" class="style">Seller Login</router-link></li>
              <!-- <li><router-link to="/register" class="style">Sign Up</router-link></li> -->
              <li><router-link to="/login" class="style">Login</router-link></li>
              <li><router-link to="/login" class="style"><span class="glyphicon glyphicon-shopping-cart style" aria-hiddent="true"></span>Cart</router-link></li>
            </ul>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <router-link to="/search" class="style"><button class="btn btn-primary" type="submit">Search</button></router-link>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media(max-width:767px) {
    .navbar .navbar-form {
        padding-left:0;
        padding-right:0;
    }
}
@media(min-width:768px) {
    .navbar .navbar-form {
        width: 40%;
    }
}
@media (min-width: 768px){
.navbar-header {
  float: none;
  display: block;
}
}
.navbar .navbar-form {
    padding-top: 0;
    padding-bottom: 0;
    margin-right: auto;
    margin-left: auto;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}
.form-control{
  display: inline;
  margin:4px;
  border: 1.5px solid #00ccff;
}
form.navbar-form{
  display: flex;
  width: 50%;
}
.style{
  color: #00ccff;
}
.btn-primary{
  background-color: #00ccff;
}
#nav a.router-link-exact-active.style, #nav a{
  color: #00ccff;
}
div.navbar-header{
  display: block;
}
.container{
  width:100%;
}
</style>
