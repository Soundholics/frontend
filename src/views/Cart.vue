<template>
  <div>
    <h1>Cart</h1>
    <CartItem v-for="cartItem in cartItems" :key="cartItem.productName" :cartItem="cartItem" />
    <h3>Subtotal: <span>{{subtotal}}</span></h3>
    <button @click="checkout">Checkout</button>
    <table class="table table-hover shopping-cart-wrap">
      <thead class="text-muted">
        <tr>
          <th scope="col">Product</th>
          <th scope="col" width="120">Quantity</th>
          <th scope="col" width="120">Price</th>
          <th scope="col" width="200" class="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <figure class="media">
              <div class="img-wrap"><img src="http://bootstrap-ecommerce.com/main/images/items/2.jpg" class="img-thumbnail img-sm"></div>
              <figcaption class="media-body">
                <h6 class="title text-truncate">Product name goes here </h6>
                <dl class="param param-inline small">
                  <dt>Size: </dt>
                  <dd>XXL</dd>
                </dl>
                <dl class="param param-inline small">
                  <dt>Color: </dt>
                  <dd>Orange color</dd>
                </dl>
              </figcaption>
            </figure>
          </td>
          <td>
            <select class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </td>
          <td>
            <div class="price-wrap">
              <var class="price">USD 145</var>
              <small class="text-muted">(USD5 each)</small>
            </div> <!-- price-wrap .// -->
          </td>
          <td class="text-right">
          <a title="" href="" class="btn btn-outline-success" data-toggle="tooltip" data-original-title="Save to Wishlist"> <i class="fa fa-heart"></i></a>
          <a href="" class="btn btn-outline-danger"> × Remove</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
  components: { CartItem },
  name: 'Cart',
  data: () => ({
    cartItems: [
      // {
      //   productName: 'product 1',
      //   productPrice: 400,
      //   productQuanity: 2
      // },
      // {
      //   productName: 'product 2',
      //   productPrice: 250,
      //   productQuanity: 6
      // },
      // {
      //   productName: 'product 3',
      //   productPrice: 390,
      //   productQuanity: 1
      // },
      // {
      //   productName: 'product 4',
      //   productPrice: 450,
      //   productQuanity: 7
      // }
    ]
  }),
  computed: {
    subtotal: function () {
      let sum = 0
      this.cartItems.forEach((element) => {
        sum += (element.productPrice * element.productQuanity)
      })
      return sum
    }
  },
  methods: {
    checkout () {
      // send order details
      // redirect to order summary
      console.log('done')
    }
  }
}
</script>

<style scoped>
.param {
    margin-bottom: 7px;
    line-height: 1.4;
}
.param-inline dt {
    display: inline-block;
}
.param dt {
    margin: 0;
    margin-right: 7px;
    font-weight: 600;
}
.param-inline dd {
    vertical-align: baseline;
    display: inline-block;
}

.param dd {
    margin: 0;
    vertical-align: baseline;
}
.shopping-cart-wrap .price {
    color: #007bff;
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
    display: block;
}
var {
    font-style: normal;
}

.media img {
    margin-right: 1rem;
}
.img-sm {
    width: 90px;
    max-height: 75px;
    object-fit: cover;
}
</style>
