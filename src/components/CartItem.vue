<template>
  <div class="item">
    <div class="image">
      <img src="../assets/earbud.svg" alt="" />
    </div>

    <div class="description">
      <span>{{this.name}}</span>
      <!-- <span>Bball High</span>
      <span>White</span> -->
    </div>
    <div class="total-price">${{this.price}}</div>
    <div class="quantity">
      <!-- <button class="minus-btn" type="button" name="button">
        -
      </button>
      <input type="text" name="name" :value="cartItem.productQuanity">
      <button class="plus-btn" type="button" name="button">
        +
      </button> -->
      <b-form-spinbutton id="demo-sb" @change="updateCartStore" v-model="cartItem.quantity" min="1" max="100"></b-form-spinbutton>
    </div>
    <div class="total-price">${{this.price * cartItem.quantity}}</div>

    <div class="buttons">
      <button @click="deleteItem"><b-icon-trash></b-icon-trash></button>
      <!-- <span class="delete-btn"></span> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartItem',
  props: ['cartItem', 'cartSave'],
  data: () => ({
    name: '',
    price: ''
  }),
  methods: {
    updateCartStore () {
      for (const i in this.cartSave) {
        if (i.id === this.cartItem.productId) {
          i.quantity = this.cartItem.quantity
        }
      }
      const result = { customerEmail: this.$store.getters.getEmail, productEntities: this.cartSave }
      console.log(result)
      fetch('http://10.177.68.63:8082/order/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
        .then(res => {
          console.log(res)
        })
    },
    deleteItem () {
      console.log(this.cartSave)
      const temp = this.cartSave.filter((element) => {
        return element.productId !== this.cartItem.productId
      })
      const result = { customerEmail: this.$store.getters.getEmail, productEntities: temp }
      fetch('http://10.177.68.63:8082/order/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      })
        .then(res => {
          console.log(res)
          this.$emit('reloadCart')
        })
    }
  },
  mounted () {
    fetch('http://10.177.68.63:8082/product/getproduct/' + this.cartItem.productId)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.name = res.name
      })
    fetch('http://10.177.68.63:8082/Inventory/findSpecificPrice/' + this.cartItem.productId + '/' + this.cartItem.merchantId)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        this.price = res
      })
  }
}
</script>

<style>
.item {
  padding: 20px 30px;
  height: 120px;
  display: flex;
  color: #14ffec;
  justify-content: space-around;
}

/*.item:nth-child(3) {
  border-top:  1px solid #E1E8EE;
  border-bottom:  1px solid #E1E8EE;
} */
.buttons {
  position: relative;
  padding-top: 20px;
  /* margin-left: auto; */
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
/* .image {
  margin-right: 50px;
} */
.description {
  padding-top: 20px;
  /* margin-right: 60px; */
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
  font-size: 16px;;
}
.quantity {
  padding-top: 20px;
  /* margin-right: 60px; */
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
  padding-top: 25px;
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
  /* .buttons {
    margin-right: 20px;
  } */
}
</style>
