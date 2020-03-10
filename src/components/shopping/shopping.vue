<template>
    <div class="shopping">
        <div class="shopmsg" @click="gotoshop(shop)" v-for="shop in shopData" :key="shop.id">
          <img class="shopphoto" :src="shop.shopphoto">
          <span class="shopname">{{shop.shopname}}</span>
          <img class="stars" src="../../assets/shop/星星.png">
          <span class="level">{{shop.stars}}</span>
          <span class="cost">起送￥15 配送￥3</span>
          <span class="discount"> 20减5 </span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    gotoshop: function (shop) {
      this.$router.push({
        path: '/shop', query: {shop: shop}
      })
    },
    setData () {
      axios.get('/apis/getshoplist')
        .then((data) => {
          // console.log(data.data)
          this.shopData = data.data
          // console.log(this.shopData)
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setData())
  },
  data () {
    return {
      shopData: []
      //   {'name': '肯 德 基 宅 急 送', 'imgurl': '../../static/shop/肯德基.png', 'stars': '5.0'},
      //   {'name': '海 岸 百 货', 'imgurl': '../../static/shop/海岸百货.png', 'stars': '4.9'},
      //   {'name': '大 润 发', 'imgurl': '../../static/shop/大润发.png', 'stars': '4.8'},
      //   {'name': '良 品 铺 子', 'imgurl': '../../static/shop/良品铺子.png', 'stars': '4.7'},
      //   {'name': '老 戴 水 果', 'imgurl': '../../static/shop/老戴水果.png', 'stars': '4.6'},
      //   {'name': '马 刻 便 利 店', 'imgurl': '../../static/shop/马刻便利店.png', 'stars': '4.5'},
      //   {'name': '老 塞 咖 啡', 'imgurl': '../../static/shop/老塞咖啡.png', 'stars': '4.4'},
      //   {'name': '佳 得 乐 便 利 店', 'imgurl': '../../static/shop/佳得乐便利店.png', 'stars': '4.3'}
      // ]
    }
  }
}
</script>

<style scoped>
.shopping{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  margin-bottom:50px;
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
