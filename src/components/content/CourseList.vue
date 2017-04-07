<template>
  <Menu class="course-list" width="24rem">
    <ul>
      <li class="course learned">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course learned">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course selected">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course ">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course ">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
      <li class="course ">
        <p class="course-name">C01.了解智能硬件</p>
        <p class="course-date">3月26日</p>
      </li>
    </ul>
  </Menu>
</template>

<script>
  export default {
    name: 'courseList',
    data () {
      return {
        msg: 'here is content'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course-list{
    padding-left: 2rem;
    height: calc(100% - 12.5rem);
    position: absolute;
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
</style>
