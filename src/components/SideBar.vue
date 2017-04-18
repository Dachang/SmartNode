<template>
  <div class="side-bar">
    <Menu :theme="theme3" active-name="1" width="12rem">
      <ul class="btn-list">
        <li v-for="(btn,index) in btnGroup">
          <router-link :to="urlGroup[index]">
            <Button long type="ghost" class="text-left" :class=" (index === activatedBtn) ? 'btn-activate' : ''" @click="changeBtn(index)">
              {{btn}}
            </Button>
          </router-link>
        </li>
      </ul>
    </Menu>
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
          '选项与设置'
        ],
        urlGroup:[
          '/syllabus',
          '/homework',
          '/score',
          '/group',
          '/exercise',
          '/files',
          '/message',
          '/settings'
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

<style scoped>
  .side-bar{
    position: absolute;
    left: 0;
    height: calc( 100% - 6.5rem);
  }
  .side-bar > ul{
    margin-top: -1rem;/* TODO:不知道为什么。。。没有这条就会差一条距离————朱嘉业 注 2017/03/07 */
  }
  .btn-list{
    padding: 0 1rem;
  }
  .btn-list li{
    margin: 1.5rem 0;
  }
  .text-left{
    text-align: left;
    font-size: 14px;
  }
  .btn-activate{
    color: #5cadff;
    background-color: transparent;
    border-color: #5cadff;
  }

  /*** iview theme custom start ***/

  .ivu-btn:not(.btn-activate){
    border-color: #FFF;
  }
  .ivu-btn:not(.btn-activate):hover{
    border-color: #5cadff;
  }

  .ivu-menu-vertical .ivu-menu-item:hover{
    background: none;
  }
  .ivu-menu-vertical .ivu-menu-item:hover{
    background: none;
  }
  .ivu-menu{
    height: 100%;
  }
  /*** iview theme custom end ***/

</style>
