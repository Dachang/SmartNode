<template>
  <div class="content">
    <content-header>
      <p slot="title" class="title">本周作业</p>
      <p slot="subtitle" class="subtitle">制作一个寻路机器人</p>
      <Button slot="btn" type="ghost" class="btn-font custom-ghost">查看详情</Button>
    </content-header>
    <div id="history">
      <p class="title margin">往期作业</p>
      <router-link :to="'/homework/1'">
        <li class="row">
          <h4>第三周作业标题</h4>
          <Button type="primary" class="gray-btn" @click="">已提交</Button>
        </li>
      </router-link>
      <li class="row">
        <h4>第二周作业标题</h4>
        <Button type="primary" class="gray-btn">已打分</Button>
      </li>
      <li class="row">
        <h4>第一周作业标题</h4>
        <Button type="primary" class="gray-btn">已打分</Button>
      </li>
    </div>
    <!-- <Row v-if="!isSubroot" padding class="prevent-overflow padding">
      <Col span="12" class='scroll'><homework-detail></homework-detail></Col>
      <Col span="12">

      </Col>
    </Row> -->
    
  </div>
</template>

<script>
  import ContentHeader from './content/Header.vue';
  // import HomeworkDetail from './content/homework/HomeworkDetail.vue';

  export default {
    name: 'homework-page',
    data () {
      return {
        msg: 'here is content',
        // isSubroot: this.$route.path == '/homework'
      }
    },
    methods:{
    },
    components:{
      ContentHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    color: black;
    font-size: 18px;
  }
  .gray-btn{
    background: #E8E8E8;
    color: black;
    border-color: #E8E8E8;
  }
  .content{
    margin-left: 12rem;
  }
  .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d6d6d6
  }
  .row>h4{
    color: #000;
    margin: 1rem 0;
    display: inline-block;
  }
  #history{
    margin: 0 2rem;
  }
  .prevent-overflow{
    height: calc(100% - 9.5rem);
  }
  .prevent-overflow>div{
    height: 100%;
    overflow: scroll;
  }
</style>
