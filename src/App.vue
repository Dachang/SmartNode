<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="layout">
      <top-bar></top-bar>
      <Row type='flex' style="height: calc( 100% - 3rem)">
        <Col>
          <side-bar></side-bar>
        </Col>
        <Col style="width: calc( 100% - 120px )">
          <transition name="fade"mode="out-in">
          <keep-alive>
            <router-view class="fast"></router-view>
          </keep-alive>
          </transition>
        </Col>
      </Row>
    </div>
    
    
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

<style lang='less'>
@import './App.less';

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
  .margin{
    margin: 1.5rem 0;
  }
  .padding{
    padding: 0 2rem;
  }
  #app{
    height: 100%;
  }
  .layout{
        /*border: 1px solid #d7dde4;*/
        background: #f5f7f9;
        position: relative;
        /*border-radius: 4px;*/
        // overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
