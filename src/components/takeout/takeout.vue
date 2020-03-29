<template>
    <div class="takeout">
      <div>
        <search @on-submit="onSubmit" :auto-fixed="false" @on-focus="onFocus" @on-cancel="onCancel"></search>
      </div>
      <div style="margin-top:10px;">
      <swiper class="swiper" :list="data_list" auto height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
      </div>
      <div style="margin-top:10px">
        <img src="../../assets/takeout/content.jpg" style="height:160px;width:100%;margin-left:0;">
      </div>
      <div style="height:100px;">
          <p class="movie">
            <span style="display:flex;margin-left:10px;margin-top:10px;">电影</span>
            <span style="position:absolute;font-size:70%;margin-top:10px;margin-left:10px;">19.9元起</span>
            <img src="../../assets/takeout/淘票票.png" style="position:absolute;height:30px;margin-left:60%;margin-top:10px;">
          </p>
          <p class="hotel">
            <span style="display:flex;margin-left:10px;margin-top:10px;">酒店</span>
            <span style="position:absolute;font-size:70%;margin-top:10px;margin-left:10px;">专享特价</span>
            <img src="../../assets/takeout/飞猪.png" style="height:30px;margin-left:60%;margin-top:10px;">
            </p>
          <p class="train">
            <span style="display:flex;margin-left:10px;margin-top:10px;">火车票</span>
            <span style="position:absolute;font-size:70%;margin-top:10px;margin-left:10px;">便捷出行</span>
            <img src="../../assets/takeout/飞机火车票.png" style="height:20px;margin-left:60%;margin-top:10px;">
          </p>
      </div>
      <div>
        <p class="recommend">推荐商家</p>
        <!-- <img class="shopphoto" src="../../../static/shop/海岸百货超市.png">
        <img class="shopphoto" src="../../../static/shop/大润发.png">
        <img class="shopphoto" src="../../../static/shop/良品铺子.png">
        <img class="shopphoto" src="../../../static/shop/老戴水果.png">
        <img class="shopphoto" src="../../../static/shop/马刻便利店.png">
        <img class="shopphoto" src="../../../static/shop/老塞咖啡.png">
        <img class="shopphoto" src="../../../static/shop/佳得乐便利店.png"> -->
        <div class="shopmsg" @click="gotoshop(shop)" v-for="shop in shopData" :key="shop.id">
          <img class="shopphoto" :src="shop.imgurl">
          <span class="shopname">{{shop.name}}</span>
          <img class="stars" src="../../assets/shop/星星.png">
          <span class="level">{{shop.stars}}</span>
          <span class="cost">起送￥15 配送￥3</span>
          <span class="discount"> 20减5 </span>
        </div>
      </div>
    </div>
</template>

<script>
import { Search, dateFormat, Swiper } from 'vux'
const imgList = [
  '/static/p1.png',
  '/static/p2.png',
  '/static/p3.png'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  components: {
    Search, Swiper, dateFormat
  },
  data () {
    return {
      onSubmit: '',
      onFocus: '',
      onCancel: '',
      data_list: demoList,
      shopData: [
        {'name': '肯 德 基 宅 急 送', 'imgurl': '../../static/shop/肯德基.png', 'stars': '5.0'},
        {'name': '海 岸 百 货', 'imgurl': '../../static/shop/海岸百货.png', 'stars': '4.9'},
        {'name': '大 润 发', 'imgurl': '../../static/shop/大润发.png', 'stars': '4.8'},
        {'name': '良 品 铺 子', 'imgurl': '../../static/shop/良品铺子.png', 'stars': '4.7'},
        {'name': '老 戴 水 果', 'imgurl': '../../static/shop/老戴水果.png', 'stars': '4.6'},
        {'name': '马 刻 便 利 店', 'imgurl': '../../static/shop/马刻便利店.png', 'stars': '4.5'},
        {'name': '老 塞 咖 啡', 'imgurl': '../../static/shop/老塞咖啡.png', 'stars': '4.4'},
        {'name': '佳 得 乐 便 利 店', 'imgurl': '../../static/shop/佳得乐便利店.png', 'stars': '4.3'}
      ]
    }
  },
  methods: {
    gotoshop: function (shop) {
      this.$router.push({
        path: '/shop', query: {shop: shop}
      })
    }
  }
}
</script>

<style scoped>
.takeout{
  top: 0px;
  left: 5px;
  right:5px;
  position: absolute;
  margin-bottom: 50px;
}
.movie{
  position:absolute;
  margin-left:5px;
  margin-top:10px;
  width:30%;
  height: 80px;
  background: #f5f5f5;
}
.hotel{
  position:absolute;
  margin-left: 35%;
  width:30%;
  margin-top:10px;
  height: 80px;
  background: #f5f5f5;
}
.train{
  position:absolute;
  margin-left: 68%;
  margin-top:10px;
  height:80px;
  width:30%;
  background: #f5f5f5;
}
.recommend{
  margin-top:10px;
  font-size:110%;
  margin-bottom: 5px;
}
.shopmsg{
  position: relative;
  height:120px;
  width:100%;
}
.shopphoto{
  position: relative;
  margin-top:10px;
  margin-left:10px;
  height:100px;
}
.shopname{
  position: absolute;
  margin-top:10px;
  margin-left:10px;
}
.stars{
  position: absolute;
  margin-top:40px;
  margin-left:10px;
  width: 15px;
}
.level{
  position: absolute;
  margin-top:39px;
  margin-left:30px;
  font-size: 90%;
  color:orange
}
.cost{
  position: absolute;
  margin-top:60px;
  margin-left:10px;
  font-size: 85%;
  color:gray
}
.discount{
  position: absolute;
  margin-top:85px;
  margin-left:10px;
  font-size: 85%;
  color:orange;
  border:orange 0.5px solid;
}
</style>
