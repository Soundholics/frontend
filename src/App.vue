<template>
  <div id="app">
      <!-- <nav class="navbar navbar-fixed-top bg-light" id="nav">
        <div class="container-fluid">
          <div class="navbar-header">
            <router-link to="/" class="navbar-brand style" style="display:inline"><span class="glyphicon glyphicon-headphones style" aria-hiddent="true"></span>Soundholics</router-link>
            <button type="button" class="navbar-toggle collapsed ml-auto" data-toggle="collapse" data-target="#bs-nav-demo" aria-controls="bs-nav-demo" aria-expanded="false" aria-label="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <ul class="nav navbar-nav navbar-right collapse navbar-collapse" id="bs-nav-demo">
              <li><router-link to="/merchantlogin" class="style">Seller Login</router-link></li>
              <li><router-link to="/login" class="style">Login</router-link></li>
              <li><router-link to="/cart" class="style"><span class="glyphicon glyphicon-shopping-cart style" aria-hiddent="true"></span>Cart</router-link></li>
            </ul>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <router-link to="/search" class="style"><button class="btn btn-primary" type="submit">Search</button></router-link>
            </form>
          </div>
        </div>
      </nav> -->
      <b-navbar toggleable="md" type="dark" variant="dark" fixed="top"> <!-- class navbar id nav-->
        <b-navbar-brand class="right">
        <router-link to="/" class="style"><span class="glyphicon glyphicon-headphones style" aria-hiddent="true"></span>Soundholics</router-link>
        </b-navbar-brand>
        <b-nav-form class="mx-auto" style="width:200px">
          <b-form-input size="lg" class="mx-auto" placeholder="Search"></b-form-input>
          <b-button class="style mx-auto" to="/search">Search</b-button>
        </b-nav-form>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/merchantlogin" class="style">Seller Login</b-nav-item>
            <b-nav-item to="/login" class="style">Login</b-nav-item>
            <b-nav-item to="/cart" class="style"><span class="glyphicon glyphicon-shopping-cart style" aria-hiddent="true"></span>Cart</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
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
// @media (min-width: 768px){
// .navbar-collapse{
//   width: fit-content !important;
// }}
// div#nav-collapse{
//   width: fit-content;
// }
// @media (min-width: 576px){
// .form-inline .form-control {
//   // width: 20rem !important;
//   // height: 3rem;
// }}
// #nav {
//   // padding: 30px;
//   // background-color: #222;
//   a {
//     font-weight: bold;
//     // color: #2c3e50;
//   }
// }
// .navbar{
//   background-color: #212121;
//  }
// // @media(max-width:767px) {
// //     .navbar .navbar-form {
// //         padding-left:0;
// //         padding-right:0;
// //     }
// // }
// // @media(min-width:768px) {
// //     .navbar .navbar-form {
// //         width: 40%;
// //     }
// // }
// @media (min-width: 768px){
// .navbar-header {
//   float: none;
//   // display: block;
// }
// }
// .navbar .form-inline {
//     // padding-top: 0px;
//     // padding-bottom: 0;
//     // margin-right: auto;
//     // margin-left: auto;
//     // border: 0;
//     -webkit-box-shadow: none;
//     box-shadow: none;
// }
// .form-control{
//   // display: inline;
//   margin:4px;
//   border: 1.5px solid #212121;
// }
// // form.form-inline{
// //   display: flex;
// //   width: 50%;
// // }
.style{
  color: #14ffec;
}
.btn.btn-secondary{
background-color: #14ffec;
  border: #14ffec;
  color:#0D7377;
}
// .btn.btn-primary, a[href="/search"]{
//   background-color: #14ffec;
//   border: #14ffec;
//   color:#0D7377;
// }
// .btn-primary:visited{
//   background-color: #14ffec;
// }
// // #nav a.router-link-exact-active.style, #nav a{
// //   color: #00ccff;
// // }
// // div.navbar-header{
// //   display: block;
// // }
// // .container{
// //   width:100%;
// // }
</style>
