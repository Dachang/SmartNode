<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <top-bar></top-bar>
    <side-bar></side-bar>
    <transition name="fade"
                mode="out-in">
      <keep-alive>
        <router-view class="fast"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

import TopBar from './components/TopBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    TopBar,
    SideBar
  }
}
</script>

<style>
  body{
    margin: 0;
    height: 100%;
  }
  html{
    min-height: 100%;
  }
  .fast{
    animation-duration: 0.2s !important;
  }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
