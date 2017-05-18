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
    <Row class="lesson" type='flex' align="middle" justify="space-between">
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
    </Row>
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  data () {
    return {
      style: 'list',
      lessons:[
        {
          name:'了解只能硬件',
          date:'3月6日'
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


