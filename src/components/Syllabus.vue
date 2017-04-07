<template>
  <div class="content">
    <content-header>
      <p slot="title" class="title">当前课程</p>
      <p slot="subtitle" class="subtitle">编程基础 第一学期</p>
      <Button slot="btn" type="ghost" class="btn-font custom-ghost"> 查看简介</Button>
    </content-header>
    <course-list></course-list>
  </div>
</template>

<script>
  import ContentHeader from './content/Header.vue';
  import CourseList from './content/CourseList.vue';

  export default {
    name: 'content',
    data () {
      return {
        msg: 'here is content'
      }
    },
    components:{
      ContentHeader,
      CourseList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*h1, h2 {*/
    /*font-weight: normal;*/
  /*}*/

  /*ul {*/
    /*list-style-type: none;*/
    /*padding: 0;*/
  /*}*/

  /*li {*/
    /*display: inline-block;*/
    /*margin: 0 10px;*/
  /*}*/

  /*a {*/
    /*color: #42b983;*/
  /*}*/

  .content{
    margin-left: 12rem;
  }
</style>
