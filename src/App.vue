<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      <div>

      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Navbar from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family:'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  color: white;
}

#nav a {
  /* color: #2c3e50; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
