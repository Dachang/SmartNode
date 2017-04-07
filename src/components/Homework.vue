<template>
  <div class="content">
    <content-header>
      <p slot="title" class="title">本周作业</p>
      <p slot="subtitle" class="subtitle">制作一个寻路机器人</p>
      <Button slot="btn" type="ghost" class="btn-font custom-ghost">查看详情</Button>
    </content-header>
  </div>
</template>

<script>
  import ContentHeader from './content/Header.vue';

  export default {
    name: 'content',
    data () {
      return {
        msg: 'here is content'
      }
    },
    components:{
      ContentHeader,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
    margin-left: 12rem;
  }
</style>
