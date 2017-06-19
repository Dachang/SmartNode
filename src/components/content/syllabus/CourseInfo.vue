<template>
  <div class="course-info">
    <Row type="flex" justify="space-between" align="middle" id='header'>
      <Col class="flex align-items-stretch">
        <!--<div >-->
          <img id="logo" src="/static/course-info/courseinfo-icon.svg">
          <div class="inline-flex-column justify-between">
            <h1>编程基础</h1>
            <span class="title-warm-grey-13-px">第一学期  难度 中等</span>
          <!--</div>-->
        </div>
      </Col>
      <Col class="switch flex justify-around align-items-center" @click="switchStyle">
        <span @click="switchStyle">列表</span>
        <span @click="switchStyle">日期</span>
        <div id="active" :style="currStyle"></div>
      </Col>
    </Row>
    <p>在此入门级编程课程中，你将学习软件工程师必须掌握的一门技能——面向对象编程方法，从而轻松地重复利用和共享代码。你将在实践中学习知识：在每节课中，你都会运用所学的编程概念，构建一个超小的迷你项目。</p>
    <p>我们知道，对新手来说，编程不是一件容易的事，因此，我们精心设计本课程，确保你能获得愉快的学习体验！</p>
    <router-link :to="'/lesson/'+lesson.id" v-for="(lesson,index) in lessons" :key="lesson.id">
      <Row class="lesson" :class="lessonType(index)" type="flex" align="middle" justify="space-between" >
        <span class="text-style">{{fmtNum(index)}}.{{lesson.name}}</span>
        <span class="date">{{lesson.date}}</span>
      </Row>
    </router-link>

    
    <!--<Row class="lesson" type='flex' align="middle" justify="space-between">
      <span class='text-style'>04. 了解只能硬件</span>
      <span class="date">3月26日</span>
    </Row>
    <Row class="lesson current" type='flex' align="middle" justify="space-between">
      <span class='text-style'>04. 了解只能硬件</span>
      <span class="date">3月26日</span>
    </Row>
    <Row class="lesson future" type='flex' align="middle" justify="space-between">
      <span class='text-style'>04. 了解只能硬件</span>
      <span class="date">3月26日</span>
    </Row>-->
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  data () {
    return {
      currentLesson:2,
      style: 'list',
      lessons:[
        {
          id:'5022c3927cdd92dffe8ee4b614a0d02c',
          name:'了解智能硬件',
          date:'3月26日'
        },
        {
          id:'3284719918160a9d87e1ee7f24b38b27',
          name:'使用SmartNode进行练习',
          date:'3月29日'
        },
        {
          id:'30d2c9afd77947d5cc448b0b992e5bf0',
          name:'制作第一个原型',
          date:'4月3日'
        },
        {
          id:'8cc1b3db220de6aa9b20d9f9ab6284be',
          name:'更多模块和可能性',
          date:'4月6日'
        },
        {
          id:'038d33fb47cbe927a6fa2371355b2aee',
          name:'蓝牙模块和通信',
          date:'4月9日'
        },
        {
          id:'5421d2951a8dd6f7a07403fac025851d',
          name:'机器人制作 第一部分',
          date:'4月12日'
        },
        {
          id:'25e5625921094672c0c5c9f0796a8c5c',
          name:'机器人制作 第二部分',
          date:'4月15日'
        },
        {
          id:'f548a28814845dee6fdad464a086e1a0',
          name:'使用移动应用控制硬件',
          date:'4月18日'
        }
      ]
    }
  },
  computed:{
    currStyle () {
      return {left:(this.style === 'list') ? '5px' : '77px'};
    }
  },
  methods:{
    switchStyle () {
      this.style === 'list' ? (this.style = 'date') : (this.style = 'list');
    },
    lessonType (index) {
      if (this.currentLesson > index) return ''
      else if (this.currentLesson == index) return 'current'
      else return 'future'
    },
    fmtNum (num){
      num++;
      return (num >= 10) ? num : ('0'+num) 
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../App.less';

.date:extend(.text-style){
  color:@warm-grey;
}

.current{
  border-color: @dodger-blue !important;
  box-shadow: 0px 0px 0px 4px rgba(77, 161, 255, 0.07);
}

.future{
  opacity: 0.45;
}

/* Rect Copy 2: */
// background: #FFFFFF;
// border: 1px solid #518AFF;
// border: 4px solid rgba(77,161,255,0.07);
// border-radius: 6px;

.lesson{
  width: 100%;
  border-radius: 6px;
	background-color: @white;
	border: solid 1px @pale-grey;
  padding: 1rem 2rem;
  margin: 1rem 0;
}

p:extend(.text-style){
  color:@warm-grey;
  letter-spacing: 0.3px;
  margin-bottom: 1rem;
}


#header{
  margin-bottom: 1.5rem;
}

.switch{
  width: 148px;
	height: 44px;
	border-radius: 4px;
	background-color: @white-four;
}
.switch>span{
  z-index: 2;
}
h1{
font-family: PingFangSC-Regular;
font-weight: normal;
font-size: 24px;
color: #000000;
letter-spacing: 0;

}
#logo{
  box-shadow: 1px 2px 17px 0 rgba(0, 0, 0, 0.07);
  margin-right: 1rem;
}
.course-info{
  padding: 0 1rem;
  // padding-left: 1rem;
  // background: darken(greenyellow,10%);
  // height: 100%;
  // width: 100%;
  // padding-right: 2rem;
}
#active{
  position: absolute;
  width: 66px;
  height: 34px;
  border-radius: 3px;
  background-color: @white;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.03);
  z-index: 1;
  left: 5px;// 5 <-> 77
  -webkit-transition: left .25s ease;
  -moz-transition: left .25s ease;
  -ms-transition: left .25s ease;
  -o-transition: left .25s ease;
  transition: left .25s ease;
}

</style>


