<template>
    <div class="shopping">
      <div>
        <div @click="gotoshop(shop)" v-for="shop in shopData" :key="shop.id">
          <img class="shopphoto" :src="shop.imgurl">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    gotoshop: function (shop) {
      this.$router.push({
        path: '/shop', query: {shop: shop}
      })
    }
  },
  data () {
    return {
      shopData: [
        {'name': '肯 德 基 宅 急 送', 'imgurl': '../../static/shop/肯德基店.png'},
        {'name': '海 岸 百 货', 'imgurl': '../../static/shop/海岸百货超市.png'},
        {'name': '大 润 发', 'imgurl': '../../static/shop/大润发.png'},
        {'name': '良 品 铺 子', 'imgurl': '../../static/shop/良品铺子.png'},
        {'name': '老 戴 水 果', 'imgurl': '../../static/shop/老戴水果.png'},
        {'name': '马 刻 便 利 店', 'imgurl': '../../static/shop/马刻便利店.png'},
        {'name': '老 塞 咖 啡', 'imgurl': '../../static/shop/老塞咖啡.png'},
        {'name': '佳 得 乐 便 利 店', 'imgurl': '../../static/shop/佳得乐便利店.png'}
      ]
    }
  }
}
</script>

<style scoped>
.shopping{
  position:absolute;
  top:0;
  left:0;
  margin-bottom: 50px;
}
.shopphoto{
  position: relative;
  top:0px;
  left:0px;
  width:100%;
  height:120px;
}
</style>
