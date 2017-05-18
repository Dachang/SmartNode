<template>
  <!--<Menu width="100%" class="course-list">-->
  <div class="course-list">
    <p class="title-charcoal-grey-13-px" id="all-course">全部课程</p>
    <router-link :to="'/syllabus/'+(index+1)" v-for="(course,index) in courseList" :key="index">
      <li class="course" :class="{'learned':true,'selected':(selected==index)}" @click="switchClass(index)">
        <Row type="flex" justify="space-between">
          <Col class="course-name">
          <p class="text-style">{{course.name}}</p>
          </Col>
          <Col>
          <span class="dots">···</span>
          </Col>
        </Row>
  
        <p class="course-progress">第
          <span class="progress">
            <a href="#">{{course.myProgress}}</a> / {{course.totalProgress}}</span>节课程</p>
      </li>
      <div class="progress-bar-border">
        <div class="progress-bar-inner" :style="'width:'+course.myProgress/course.totalProgress*18+'rem'"></div>
      </div>
    </router-link>
  </div>
  
  <!--</Menu>-->
</template>

<script>
export default {
  name: 'syllabuspage-courselist',
  data() {
    return {
      selected: this.$route.params.id - 1,
      msg: 'here is content',
      courseList: [
        {
          name: '编程基础',
          myProgress: 6,
          totalProgress: 24,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
        {
          name: '机器人制作',
          myProgress: 8,
          totalProgress: 12,
        },
      ]
    }
  },
  methods: {
    switchClass(classId) {
      this.selected = classId;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../../App.less';

.progress-bar-border {
  width: 18rem;
  height: 4px;
  border-radius: 8px;
  border: solid 1px @white-three;
  margin-bottom: 44px;
}

.progress-bar-inner {
  position: absolute;
  height: 4px;
  margin-top: -1px; //调整进度内条位置，覆盖外边框
  margin-left: -1px;
  background: #518aff;
  border-radius: 8px;
}

.progress {
  color: @white;
  margin: 0 4px;
}

.dots {
  color: @silver-73;
  font-size: 24px;
}

#all-course {
  margin-bottom: 1rem;
}

.course-list {
  /* padding-left: 2rem; */
  display: inline-block;
  /* height: calc(100% - 12.5rem); */
  /* position: absolute; */
  width: 100%;
  list-style: none;
}

.course-list li {
  list-style: none;
  -webkit-transition: background .25s ease;
  -moz-transition: background .25s ease;
  -ms-transition: background .25s ease;
  -o-transition: background .25s ease;
  transition: background .25s ease;
} // .course-list li:hover{
//   // background: #efeff4;
//   /* animation: myfirst 0.25s;
//   animation-fill-mode:forwards; */
// }
.course {
  margin: 0 0.7rem 12px 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.course-name {
  margin: auto 0;
}

.course-progress:extend(.text-style) {
  color: @warm-grey;
}

.course-progress>.progress {
  color: @black;
  font-family: AvenirNext;
  font-size: 24px;
  line-height: 1.17;
}

.learned {
  width: 18rem;
  height: 6rem;
  border-radius: 6px;
  background-color: @white;
  border: solid 1px @pale-grey;
}

.learned:hover {
  background-color: darken(@white, 5%);
  border: solid 1px darken(@pale-grey, 5%);
}

.selected {
  width: 18rem;
  height: 6rem;
  border-radius: 6px;
  background-color: @dodger-blue;
  box-shadow: 0 4px 9px 0 rgba(0, 0, 0, 0.02);
  border: solid 1px @pale-grey;
}

.selected:hover {
  background-color: darken(@dodger-blue, 5%);
  box-shadow: 0 4px 9px 0 darken(rgba(0, 0, 0, 0.02), 5%);
  border: solid 1px darken(@pale-grey, 5%);
}

.selected .text-style {
  color: @white;
}

.selected .dots {
  color: @pastel-blue;
}

.selected .progress {
  color: @white;
}

.selected .progress>a {
  color: @white;
}

@keyframes myfirst {
  /* from {background: #fff;} */
  to {
    background: #efeff4;
  }
}

@-moz-keyframes myfirst
/* Firefox */

{
  /* from {background: #fff;} */
  to {
    background: #efeff4;
  }
}

@-webkit-keyframes myfirst
/* Safari 和 Chrome */

{
  /* from {background: #fff;} */
  to {
    background: #efeff4;
  }
}

@-o-keyframes myfirst
/* Opera */

{
  /* from {background: #fff;} */
  to {
    background: #efeff4;
  }
}
</style>
