   <!-- src/App.vue -->

<template>
  <div id="app">
    <HeaderApp />
    <router-view></router-view>
    <FooterApp />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    FooterApp
  }
}
</script>

<style>
body,
html {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #acacac;
  margin-top: 60px;

}
</style>