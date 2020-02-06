<template>
    <div class="shopping">
        <div @click="gotoshop1()">
          <img class="shopphoto" src="../../assets/shop/肯德基店.png">
        </div>
        <div>
          <img class="shopphoto" src="../../assets/shop/海岸百货超市.png">
          <img class="shopphoto" src="../../assets/shop/大润发.png">
          <img class="shopphoto" src="../../assets/shop/良品铺子.png">
          <img class="shopphoto" src="../../assets/shop/老戴水果.png">
          <img class="shopphoto" src="../../assets/shop/马刻便利店.png">
          <img class="shopphoto" src="../../assets/shop/老塞咖啡.png">
          <img class="shopphoto" src="../../assets/shop/佳得乐便利店.png">
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    gotoshop1 () {
      this.$router.push({
        path: '/shop'
      })
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
