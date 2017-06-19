<template>
  <div class="content">
    <content-header>
      <p slot="title" class="title">制作一个寻路机器人</p>
      <Button slot="btn" type="ghost" class="btn-font custom-ghost" @click="goback()">返回上级</Button>
    </content-header>
    <Row padding class="prevent-overflow padding">
      <Col span="12" class='scroll'>
        <div class="discription-list">
          <h3 class="">基本要求</h3>
          <p>使用IDE，制作Syllabus，制作课件（上传资源），布置课后作业，查看学生的作业和评分，编辑上交的作业，可以编辑当堂创作。使用IDE，制作Syllabus，制作课件（上传资源），布置课后作业，查看学生的作业和评分。</p>
          <div class="row ">
            <h3>所需资源</h3>
            <a id="to-file-pool" href="#">前往文件池</a>
          </div>
          <h3 class="margin">评分标准</h3>
          <li class="row ">
            <p class="requirments">第一项要求</p>
            <p class="percent">65%</p>
          </li>
          <li class="row ">
            <p class="requirments">第二项要求</p>
            <p class="percent">20%</p>
          </li>
          <li class="row ">
            <p class="requirments">第三项要求</p>
            <p class="percent">15%</p>
          </li>
          <li class="row ">
            <p class="requirments">第四项要求（附加）</p>
            <p class="percent">+15%</p>
          </li>
        </div>
      </Col>
      <Col span="12">
        <!-- <syllabus></syllabus> -->
      </Col>
    </Row>
  </div>
  
</template>

<script>
  import ContentHeader from '../Header.vue';

  export default {
    name: 'homework-detail',
    data () {
      return {

      }
    },
    components:{
      ContentHeader
    },
    methods: {
      goback () {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .percent{
    font-size: 12px;
    color: #6C6C6C;
  }
  .requirments{
    font-size: 14px;
    color: #4A4A4A;
  }
  #to-file-pool{
    color: #4990E2;
    font-size: 14px;
  }
  h3{
    color: black;
    font-size: 14px;
  }
  .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #D6D6D6;
    padding: 1rem 0;
  }
  .row>h2{
    color: #000;
    margin: 1rem 0;
    display: inline-block;
  }
  /*.content{
    margin-left: 12rem;
  }*/
  .discription-list{
    /* padding-left: 2rem; */
    display: inline-block;
    /* height: calc(100% - 12.5rem); */
    /* position: absolute; */
    width: 100%;
    padding-right: 1rem;
    border-right: 1px solid #D6D6D6;
  }
</style>