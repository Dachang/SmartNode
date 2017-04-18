<template>
  <div class="syllabus">
    <div class="block-header">
      <span class="big-title">制作第一个原型</span>
      <span class="small-subtitle">难度 简单</span>
    </div>
    <div class="main-content">
      <h2>主要内容</h2>
      <p>使用IDE，制作Syllabus，制作课件（上传资源），布置课后作业，查看学生的作业和评分，编辑上交的作业，可以编辑当堂创作。使用IDE，制作Syllabus，制作课件（上传资源），布置课后作业，查看学生的作业和评分。</p>
    </div>
    <div class="row">
      <h2>课件</h2>
      <Button type="ghost" class="custom-ghost" @click="">查看课件</Button>
    </div>
    <div class="row">
      <h2>课堂练习</h2>
      <Button type="ghost" class="custom-ghost">已发布</Button>
    </div>
    <div class="row">
      <h2>作业</h2>
      <Button type="text" class="custon-text-btn" disabled>未发布</Button>
    </div>
    <div class="row gallery">
      <h2>精选</h2>
    </div>
    <Carousel
        class="custom-carousel"
        v-model="md1"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <Carousel-item>
            <div class="demo-carousel">1</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">2</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">3</div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">4</div>
        </Carousel-item>
    </Carousel>

  </div>
</template>

<script>
  export default {
    name: 'syllabuspage-syllabus',
    data () {
      return {
        msg: 'here is content',
        md1: 0,
        setting:{
          autoplay: true,
          autoplaySpeed: 2500,
          dots: 'inside',
          trigger: 'hover',
          arrow: 'hover'
        }
      }
    }
  }
</script>

<style scoped>
  .syllabus{
    display: inline-block;
    padding-left: 1rem;
    /* position: absolute; */
    /* margin-left: 25rem; */
    /* width: calc(100% - 39rem); */
    /* min-width: 30rem; */
  }

  .block-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    background: #EFEFF4;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  .big-title{
    font-size: 36px;
    color: #4A4A4A;
    display: block;
  }

  .small-subtitle{
    display: block;
    color: #4A4A4A;
    font-size: 12px;
  }

  .main-content,.row:not(.gallery){
    border-bottom: 1px solid #6d6d6d;
  }
  .main-content>h2{
    color: #000;
  }
  .main-content>p{
    padding-bottom: 1rem;
  }

  .row{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .row>h2{
    color: #000;
    margin: 1rem 0;
    display: inline-block;
  }

  .custom-ghost{
    color: #4A90E2;
    border-color: #4A90E2;
    width: 88px;
  }

  .custon-text-btn{
    width: 88px;
  }

  .custom-carousel{
    width: calc(100% - 1rem);
    /* height: 300px; */
    position: absolute;
  }
  .demo-carousel{
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efeff4;
    color: black;
  }
</style>