<template>
  <div class="top-bar">
    <Row class="height-100 flex align-items-center">
      <Col span="9">
        <img src="../assets/SmartNode.svg" alt="SmartNode" class="logo">
      </Col>
      <Col span="6" class="flex justify-center">
        <Button-group class="width-100">
          <Button type="primary" class="width-50" :class=" (stage === 'class') ? 'activate' : 'inactivate'" @click="toMyClass">
            我的课程
          </Button>
          <Button type="primary" class="width-50" :class=" (stage === 'playground') ? 'activate' : 'inactivate'" @click="toPlayground">
            Playground
          </Button>
        </Button-group>
      </Col>
      <Col span="9" class="flex justify-end">
      <Dropdown trigger="click" class="drop-down">
        <a href="javascript:void(0)" style="font-size: 14px">
          朱嘉业
          <Icon type="arrow-down-b" color="#9b9b9b"></Icon>
        </a>
        <Dropdown-menu slot="list">
          <Dropdown-item>item</Dropdown-item>
          <Dropdown-item>item</Dropdown-item>
          <Dropdown-item>item</Dropdown-item>
          <Dropdown-item>item</Dropdown-item>
          <Dropdown-item>item</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
      </Col>
    </Row>
    <!--<img src="../assets/SmartNode.svg" alt="SmartNode" class="logo">-->
    <!--<span>{{ msg }}</span>-->
  </div>
</template>

<script>
export default {
  name: 'top-bar',
  data () {
    return {
      msg: 'Welcome to SmartNode',
      stage: 'class'
    }
  },
  methods:{
      toPlayground () {
          this.stage = 'playground';
      },
      toMyClass () {
          this.stage = 'class';
      }
  }
}
</script>

<style scoped>
  .top-bar{
    height: 3rem;
    width: 100%;
    display: block;
    margin-bottom: 3rem;
    border-bottom: 1px solid #DADADA;
  }
  .logo{
    padding-left: 1rem;
  }
  .height-100{
    height: 100%;
  }
  .width-50{
    width: 50%;
    font-size: 14px;
  }
  .width-100{
    width: 100%;
  }
  .inactivate{
    background: #E8E8E8;
    color: black;
    border-color: #E8E8E8;
  }
  .activate{
    background-color: #4990E2;
    border-color: #4990E2;
  }
  .drop-down{
    padding-right: 1rem;
  }
</style>
