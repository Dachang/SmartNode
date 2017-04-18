<template>

  <Menu width="100%" class="course-list">
    <router-link :to="'/syllabus/'+(index+1)" v-for="(course,index) in courseList" :key="index">
      <li class="course" :class="{'learned':course.learned,'selected':(selected==index)}" @click="switchClass(index)">
        <p class="course-name">C{{(index<9) ? ('0'+(index+1)) : (index+1).toString()}}.{{course.name}}</p>
        <p class="course-date">{{course.date}}</p>
      </li>
    </router-link>
  </Menu>

</template>

<script>
  export default {
    name: 'syllabuspage-courselist',
    data () {
      return {
        selected: this.$route.params.id,
        msg: 'here is content',
        courseList:[
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:true
        },
        {
          name:'如何使用Smartnode进行练习',
          date:'3月29日',
          learned:true
        },
        {
          name:'制作第一个原型',
          date:'4月2日',
          learned:false
        },
        {
          name:'更多模块和可能性',
          date:'4月6日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        },
        {
          name:'了解只能硬件',
          date:'3月26日',
          learned:false
        }]
      }
    },
    methods:{
      switchClass(classId){
        this.selected = classId;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course-list{
    /* padding-left: 2rem; */
    display: inline-block;
    /* height: calc(100% - 12.5rem); */
    /* position: absolute; */
    width: 100%;
  }
  .course-list li{
    -webkit-transition: background .25s ease;
       -moz-transition: background .25s ease;
        -ms-transition: background .25s ease;
         -o-transition: background .25s ease;
            transition: background .25s ease;
  }
  .course-list li:hover{
    background: #efeff4;
    /* animation: myfirst 0.25s;
    animation-fill-mode:forwards; */
  }
  .course{
    margin: 0 0.7rem 1.5rem 0;
    padding: 0 0.5rem;
  }
  .course-name{
    font-size: 14px;
    color: #4a4a4a;
  }
  .course-date{
    font-size: 12px;
    color: #6c6c6c;
  }
  .learned{
    border-left: 2px solid #7ED321;
  }
  .selected{
    border-left: 2px solid #4A90E2;
    background: #D1D3D4;
  }

  @keyframes myfirst
{
/* from {background: #fff;} */
to {background: #efeff4;}
}

@-moz-keyframes myfirst /* Firefox */
{
/* from {background: #fff;} */
to {background: #efeff4;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
/* from {background: #fff;} */
to {background: #efeff4;}
}

@-o-keyframes myfirst /* Opera */
{
/* from {background: #fff;} */
to {background: #efeff4;}
}
</style>
