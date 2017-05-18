<template>
  <div class="side-bar">
    <ul class="btn-list">
        <li v-for="(btn,index) in btnGroup">
          <router-link :to="urlGroup[index]" class="black flex justify-center align-items-end" >
            <div :class=" (index === activatedBtn) ? 'indicator' : ''"></div>
            <div class="side-bar-btn" :class=" (index === activatedBtn) ? 'btn-activate' : ''" @click="changeBtn(index)">
              
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="iconGroup[index]"></use>
              </svg>
              <span class="button-title">{{btn}}</span>
            </div>
            <!--<Button long type="ghost" class="text-left" :class=" (index === activatedBtn) ? 'btn-activate' : ''" @click="changeBtn(index)">
              <img :src="'/static/sidebar/'+iconGroup[index]" style="display:block">
              {{btn}}
            </Button>-->
          </router-link>
        </li>
      </ul>
    <!--<Menu :theme="theme3" active-name="1" width="120px">
      <ul class="btn-list">
        <li v-for="(btn,index) in btnGroup">
          <router-link :to="urlGroup[index]" class="black">
            <div class="side-bar-btn">
              <img :src="'/static/sidebar/'+iconGroup[index]" style="display:block">
              <span>{{btn}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </Menu>-->
  </div>
</template>
<script>
  export default {
    name: "side-bar",
    data () {
      return {
        theme3: 'light',
        btnGroup:[
          '课程大纲',
          '我的作业',
          '我的成绩',
          '成员及讨论组',
          '课堂练习',
          '文件池',
          '消息与通知',
          // '选项与设置'
        ],
        iconGroup:[
          '#icon-syllabus',
          '#icon-homework',
          '#icon-ten',
          '#icon-group',
          '#icon-quiz',
          '#icon-file',
          '#icon-message',
          // '选项与设置'
        ],
        urlGroup:[
          '/syllabus',
          '/homework',
          '/score',
          '/group',
          '/exercise',
          '/files',
          '/message',
          // '/settings'
        ],
        activatedBtn:0
      }
    },
    methods:{
        changeBtn (i) {
            this.activatedBtn = i;
        }
    }
  }
</script>

<style scoped lang='less'>
@import '../App.less';

  .black{
    color:black;
  }

  .side-bar-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
  }
  .side-bar-btn > span {
    margin-top: 0.75rem;
  }
  .side-bar-btn>span:extend(.text-style){
    color: @warm-grey;
  }
  .side-bar-btn:hover > svg {
    fill: @dodger-blue;
  }
  .side-bar-btn:hover > span {
    color: @black;
  }

  .side-bar{
    position: fixed;
    left: 0;
    height: 100%;
    width: 120px;
    border-right: solid 1px #dadada;
  }
  // .btn-list{

  // }
  .btn-list li{
    margin: 1.75rem 0;
  }
  .text-left{
    text-align: left;
    font-size: 14px;
  }
  // .btn-activate{
  //   color: #5cadff;
  //   background-color: transparent;
  //   border-color: #5cadff;
  // }
  .btn-activate > svg {
    fill: @dodger-blue;
  }
  .btn-activate > span {
    color: @black;
  }
  .indicator{
    position: absolute;
    left: -1.2px;
    /* indicator: */
    width: 5.2px;
    height: 44px;
    border-radius: 16px;
    background-color: @dodger-blue;
    box-shadow: 2px 3px 11px 0 rgba(1, 172, 253, 0.74);
  }


</style>
