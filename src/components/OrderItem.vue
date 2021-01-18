<template>
  <div class="item">
    <div class="image">
      <img src="../assets/earbud.svg" alt="" />
    </div>

    <div class="description">
      <span>{{orderItem.productName}}</span>
      <!-- <span>Bball High</span>
      <span>White</span> -->
    </div>
    <div class="total-price">${{orderItem.productPrice}}</div>
    <div class="quantity">
      <b-form-spinbutton id="demo-sb" :value="orderItem.productQuanity" min="1" max="100"></b-form-spinbutton>
      <!-- <input type="text" name="name" :value="orderItem.productQuanity"> -->
    </div>
    <div class="total-price">${{orderItem.productPrice * orderItem.productQuanity}}</div>

    <div class="buttons">
      <button><b-icon-trash></b-icon-trash></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: ['orderItem']
}
</script>

<style scoped>
.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
  color: #14ffec;
  justify-content: space-around;
}

/* .item:nth-child(3) {
  border-top:  1px solid #E1E8EE;
  border-bottom:  1px solid #E1E8EE;
} */
.buttons {
  position: relative;
  padding-top: 30px;
}
.delete-btn{
  display: inline-block;
  Cursor: pointer;
}
.delete-btn {
  width: 18px;
  height: 17px;
  background: url("../assets/logo.png") no-repeat center;
}
.description {
  padding-top: 10px;
  width: 115px;
}
.description span {
  display: block;
  font-size: 14px;
  color: #14ffec;
  font-weight: 400;
}

.description span:first-child {
  margin-bottom: 5px;
}
.description span:last-child {
  font-weight: 300;
  margin-top: 8px;
  color: #14ffec;
  font-size: 16px
}
.quantity {
  padding-top: 20px;
}
.quantity input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #14ffec;
  font-weight: 300;
}
button[class*=btn] {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.minus-btn img {
  margin-bottom: 3px;
}
.plus-btn img {
  margin-top: 2px;
}
button:focus,
input:focus {
  outline:0;
}

.total-price {
  width: 83px;
  padding-top: 27px;
  text-align: center;
  font-size: 16px;
  color: #14ffec;
  font-weight: 300;
}

@media (max-width: 800px) {
  .shopping-cart {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .item {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image img {
    width: 50%;
  }
  .image,
  .quantity,
  .description {
    width: 100%;
    text-align: center;
    margin: 6px 0;
  }
}
</style>
