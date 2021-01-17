<template>
  <div id="orders">
    <h1>Login Activity</h1>
    <div id="heading">
      <p>Date</p>
      <p>Time</p>
    </div>
    <LoginHistoryEntry v-for="entry in history" :key="entry.name" :entry="entry" />
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
  margin-top: 10%;
}
#heading{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: white;
    border: none;
    border-bottom: 1px solid grey;
}
</style>
