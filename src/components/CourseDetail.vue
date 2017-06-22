<template>
  <div class="course-detail" style='height:100%'>
    <Row type="flex" style="height:100%">
      <Col style="padding:2rem;width: calc( 100% - 290px );height:100%">
        <Breadcrumb>
            <Breadcrumb-item href="#">编程基础</Breadcrumb-item>
            <Breadcrumb-item >制作第一个原型</Breadcrumb-item>
        </Breadcrumb>
        <Carousel
          class="custom-carousel"
          v-model="md1"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :trigger="setting.trigger"
          :arrow="setting.arrow"
          style="height:90%;margin-top:2rem;">
          <Carousel-item>
              <div class="carouselDiv">1</div>
          </Carousel-item>
          <Carousel-item>
              <div class="carouselDiv">2</div>
          </Carousel-item>
          <Carousel-item>
              <div class="carouselDiv">3</div>
          </Carousel-item>
          <Carousel-item>
              <div class="carouselDiv">4</div>
          </Carousel-item>
        </Carousel>
      </Col>
      <Col style="width:290px" class='wizard'>
        <div class="flex" style="margin-bottom:3rem;">
          <img src="../assets/course-wizard-icon.svg" alt="">
          <div class="flex justify-between" style="display:inline-flex;flex-direction:column;margin-left:1rem">
            <p class="text-style">课程助手</p>
            <p>总计用时2小时</p>
          </div>
        </div>
        <div class="cell gray-bottom">
          <p class="text-style" style="margin-bottom:0.4rem;">课程进度</p>
          <p>第 6 / 25 课时</p>
        </div>
        <div class="cell gray-bottom">
          <p class="text-style" style="margin-bottom:0.4rem;">当堂练习</p>
          <p class="flex justify-between">基础模块的使用和连接<img src="../assets/goto.svg" alt=""></p>
        </div>
        <div class="cell gray-bottom">
          <p class="text-style" style="margin-bottom:0.4rem;">课后作业</p>
          <p class="flex justify-between">天气预报机器人<img src="../assets/goto.svg" alt=""></p>
        </div>
        <div class="filelist gray-bottom">
          <p class="text-style" style="margin-bottom:0.4rem;">课程文件</p>
          <div class="file-item flex" v-for="file in filelist">
            <img src="../assets/folder.svg" alt=""> {{file.filename}}
          </div>
        </div>
        <div id="homework">
          <p class="text-style flex justify-between" style="margin-bottom:0.4rem;">课后作业<img src="../assets/goto.svg" alt=""></p>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      md1: 0,
      setting:{
        autoplay: true,
        autoplaySpeed: 2500,
        dots: 'none',
        trigger: 'click',
        arrow: 'never'
      },
      filelist:[
        {
          filename:"Presentation.pptx",
          url:""
        },
        {
          filename:"Sketch.jpg",
          url:""
        },
        {
          filename:"source data.json",
          url:""
        },
        {
          filename:"Presentation.pptx",
          url:""
        },
        {
          filename:"Sketch.jpg",
          url:""
        },
        {
          filename:"source data.json",
          url:""
        },
        {
          filename:"Presentation.pptx",
          url:""
        },
        {
          filename:"Sketch.jpg",
          url:""
        },
        {
          filename:"source data.json",
          url:""
        },
      ]
    }
  },
  computed:{

  },
  methods: {

  }
}
</script>




<style scoped lang="less">
@import '../App.less';
#homework{
  margin-top: 1rem;
}
.cell{
  height: 60px;
  margin-top:1rem;
}

.filelist{
  margin-top:1rem;
}

.wizard{
  overflow-y: scroll;
}

.file-item{
  padding: 8px;
  width: 100%;
  margin-bottom: 0.5rem;
  background: @white;
  border-radius: 3px;
  border: 1px solid @pale-grey;
}
.file-item img{
  margin-right: 8px;
}

.gray-bottom{
  border-bottom: 1px solid @white-two;
}

.wizard{
  background: @white-four-75;
  padding: 2rem;
  height: 100%;
}

.custom-carousel{
    width: 100%;
    /* height: 300px; */
    // position: absolute;
}

.carouselDiv{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efeff4;
  color: black;
}

</style>
