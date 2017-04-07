<template>
  <div class="content-header flex justify-between align-items-center">
    <div>
      <slot name="title" class="title"></slot>
      <slot name="subtitle" class="subtitle"></slot>
    </div>
    <slot name="btn" class="btn-font custom-ghost"></slot>

  </div>
</template>

<script>
  export default {
    name: 'content-header',
    data () {
      return {
        msg: '编程基础 第一学期'
      }
    },
//    props:['title','subtitle']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-header{
    padding: 0 2rem 4rem 2rem;
    height: 6.5rem;
  }
  .content-header:after{
    content: '';
    height: 1px;
    background: #d6d6d6;
    width: calc(100% - 16rem);
    position: absolute;
    margin-top: 3rem;
  }
  /*h1{*/
    /*color: black;*/
  /*}*/
  .title{
    color: black;
    font-size: 18px;
  }
  .subtitle{
    color: #6c6c6c;
    font-size: 12px;
  }
  .btn-font{
    font-size: 14px;
  }
  .custom-ghost{
    color: #4A90E2;
    border-color: #4A90E2;
  }
</style>
