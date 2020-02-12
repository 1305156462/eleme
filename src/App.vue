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
      <router-link tag="div" class="tab-item" to="/shopping">
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

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
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
