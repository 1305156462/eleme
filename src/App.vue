<template>
  <div id="app">
    <div class="mainshow">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/takeout">
        <div class="tab-link tab-link-1">
          <span class="tab-link-text">外卖</span>
        </div>
      </router-link>
      <router-link tag="div" class="tab-item" to="/lowercase">
        <div class="tab-link tab-link-2">
          <span class="tab-link-text">超市</span>
        </div>
      </router-link>
      <router-link tag="div" class="tab-item" to="/order">
        <div class="tab-link tab-link-3">
          <span class="tab-link-text">订单</span>
        </div>
      </router-link>
      <router-link tag="div" class="tab-item" to="/me">
        <div class="tab-link tab-link-4">
          <span class="tab-link-text">我的</span>
        </div>
      </router-link>
    </div>

    <!-- <tabbar  v-model = "$root.tabbarSelected" >
        <tabbar-item link="/AskQuestion" to="/takeout">
            <img slot="icon" src="./assets/tab/饿了么1.png">
            <span slot="label">提问题</span>
        </tabbar-item>
        <tabbar-item show-dot link="/MyProjectList">
            <img slot="icon" src="./assets/tab/超市1.png">
            <span  slot="label">项目单</span>
        </tabbar-item>
        <tabbar-item link="/">
            <img slot="icon" src="./assets/tab/订单1.png">
            <span slot="label">问题表</span>
        </tabbar-item>
        <tabbar-item  link="/LeaderBoard">
            <img slot="icon" src="./assets/tab/我的1.png">
            <span slot="label">排行榜</span>
        </tabbar-item>
        </tabbar> -->

    <!-- <div>
       <vue-scroll :ops="ops"> <div class="child" v-for="i in item" :key="i">
        <span class="carousel-text">
          Slide{{i}}.
        </span>
      </div> </vue-scroll>
    </div> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {
        1: 'a',
        2: 'b'
      }
    }
  }
}
</script>

<style>
.carousel-wrap {
  width: 100%;
  border: 1px solid rgba(91, 140, 255, 0.3);
}
  .child {
    width: 100%;
    text-align: center;
    text-shadow: 0px 3px 3px #975a00;
    -webkit-text-shadow: 0px 3px 3px #975a00;
    -moz-text-shadow: 0px 3px 3px #975a00;
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-style: normal;
    font-size: 48px;
    color: #ff9900;
    display: flex;
    justify-content: center;
    align-items: center;
  }
ul, li, p, div{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

ol, ul {
  list-style: none;
}

#app{
  height: 100%;
  width: 100%;
}
.app-header{
  top: 0px;
  left: 0;
  right: 0;
  background-color: #1e2b39;
  height: 50px;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.search img{
  position: absolute;
  top: 14px;
  right: 80px;
}
.plus img{
  position: absolute;
  top: 14px;
  right: 24px;
}

.tab{
  border-top: 1px solid rgba(153,153,153,0.4);
  display: flex;
  position: fixed;
  height: 50px;
  line-height: 44px;
  font-size: 14px;
  bottom: 0px;
  left: 0;
  right: 0;
  /*z-index: 9;*/
  background-color: #fff;
}
.tab-item{
  flex: 1;
  text-align: center;
}
.tab-link{
  position: relative;
  color: #999999;
  height: 50px;
}
.tab-link span{
  position: absolute;
  font-size: 14px;
  line-height: 14px;
  height: 14px;
  width: 100%;
  bottom: 6px;
  left: 0px;
}
.tab-link-1{
  background: url('./assets/tab/饿了么1.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.tab-link-2{
  background: url('./assets/tab/超市1.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.tab-link-3{
  background: url('./assets/tab/订单1.png') no-repeat center 8px;
  background-size: 20px 20px;
}
.tab-link-4{
  background: url('./assets/tab/我的1.png') no-repeat center 8px;
  background-size: 20px 20px;
}
.router-link-active .tab-link{
  color: blue;
}
.router-link-active .tab-link-1{
  background: url('./assets/tab/饿了么2.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.router-link-active .tab-link-2{
  background: url('./assets/tab/超市2.png') no-repeat center 6px;
  background-size: 20px 20px;
}
.router-link-active .tab-link-3{
  background: url('./assets/tab/订单2.png') no-repeat center 8px;
  background-size: 20px 20px;
}
.router-link-active .tab-link-4{
  background: url('./assets/tab/我的2.png') no-repeat center 8px;
  background-size: 20px 20px;
}

</style>
