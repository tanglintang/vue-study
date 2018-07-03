<template>
  <div id="app">
    <div class="link">
    <router-link to="/">/</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/login">Login</router-link>
    </div>
    <router-view class="view"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  display: flex;
  justify-content: space-around;
  font-size: 40px;
}
.view {
  font-size: 50px;
  margin-top: 50px;
  text-align: center;
}
</style>
