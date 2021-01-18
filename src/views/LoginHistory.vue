<template>
  <div id="orders">
    <h1>Login Activity</h1>
        <div id="table">
    <div id="heading">
      <p>Date</p>
      <p>Total Price</p>
    </div>
    <LoginHistoryEntry v-for="entry in history" :key="entry.name" :entry="entry" />
    </div>
  </div>
</template>

<script>
import LoginHistoryEntry from '../components/LoginHistoryEntry'
export default {
  name: 'LoginHistory',
  components: { LoginHistoryEntry },
  data: () => ({
    history: []
  }),
  beforeMount () {
    const data = [
      {
        date: '21/01/2311',
        price: 341
      },
      {
        date: '21/01/2311',
        price: 124
      },
      {
        date: '21/01/2311',
        price: 342
      }
    ]
    // fetch data
    // fetch('/merchant/orders/ani')
    //   .then((res)=>res.json())
    //   .then(() => {
    //     this.orders=res
    //   })
    console.log(1)
    this.history = data
  }

}
</script>

<style scoped>
#orders{
  margin: 10% 30%;
  color: #14ffec;
}
#table{
  box-shadow: 3px 6px #121212;
}
#heading{
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    padding: 20px;
    background: #323232;
    border: none;
    border-bottom: 1px solid grey;
}
</style>
