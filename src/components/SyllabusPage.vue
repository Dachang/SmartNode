<template>
  <div class="content">
    <!--<content-header>
        <p slot="title" class="title">当前课程</p>
        <p slot="subtitle" class="subtitle">编程基础 第一学期</p>
        <Button slot="btn" type="ghost" class="btn-font custom-ghost"> 查看简介</Button>
      </content-header>-->
    <Row class="prevent-overflow">
      <Col span="7" class='scroll'>
      <course-list></course-list>
      </Col>
      <Col span="17">
      <!-- <router-view></router-view> -->
      <CourseInfo></CourseInfo>
      </Col>
    </Row>
  
  </div>
</template>

<script>
// import ContentHeader from './content/Header';
import CourseList from './content/syllabus/CourseList';
// import Syllabus from './content/syllabus/Syllabus';
import CourseInfo from './content/syllabus/CourseInfo';

export default {
  name: 'syllabus-page',
  data() {
    return {
      msg: 'here is content'
    }
  },
  components: {
    // ContentHeader,
    CourseList,
    CourseInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  /*margin-left: 120px;*/
  /*position: fixed;*/
  height: 100%;
  /*overflow: hidden;*/
  /*width: calc(100% - 120px);*/
}

/*[padding] {
  padding: 0 2rem;
}*/

.scroll {
  overflow: scroll;
}

.prevent-overflow {
  /*height: calc(100% - 9.5rem);*/
  height: 100%;
  padding: 0 1rem 0 2rem;
}

.prevent-overflow>div {
  height: 100%;
  overflow: scroll;
  padding-top: 2rem;
}
</style>
