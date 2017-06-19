<template>
  <div class="course-detail" style='height:100%'>
    <Row type="flex" style="height:100%">
      <Col style="padding:2rem;width: calc( 100% - 290px )">
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
      </Col>
      <Col style="width:290px" class='wizard'>
        
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
      }
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

.wizard{
  background: @warm-grey;
  height: 100%;
}

.custom-carousel{
    width: 100%;
    /* height: 300px; */
    // position: absolute;
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

