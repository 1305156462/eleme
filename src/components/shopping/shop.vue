<template>
    <div class="shopmsg">
      <div class="top1">
          <div @click="back">
              <img style="position:fixed;z-index:10;height:20px;left:10px;top:10px" src="../../assets/shop/左.png"/>
          </div>
          <img style="position:fixed;z-index:10;height:20px;right:10px;top:10px" src="../../assets/shop/搜索.png">
      </div>

      <div class="top2"></div>
      <img style="position:fixed;z-index:10;width:30%;top:30px;left:35%" src="../../assets/shop/肯德基.png">
      <span style="position:fixed;z-index:10;top:140px;width:100%;text-align:center;font-size:120%">肯 德 基 宅 急 送</span>

      <div class="options">
        <div tag="div" class="goods">
          <p style="position:absolute;margin-left:25%;">商品</p>
        </div>
            <div tag="div" class="evaluate">
                <p style="position:absolute;margin-left: 45%">评价</p>
            </div>
            <div tag="div" class="merchant">
                <p style="position:absolute;margin-left: 65%">商家</p>
            </div>
      </div>

      <div class="food">
        <ul class="food_kind" ref="foodkind">
          <li v-for="item in foodData" :key="item.id">
            <p>{{item.index}}</p>
            <ul>
              <li v-for="food in item.food" :key="food.id">
                  <div class="foodmsg">
                    <img class="foodphoto" :src="food.imgurl"/>
                    <span class="foodname">{{food.name}}</span>
                    <span class="foodprice">{{food.price}}</span>
                    <img class="plus" src="../../assets/shop/添加.png">
                  </div>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="list_index" ref="listIndex">
          <li  @touchstart="setScroll" v-for="item in foodIndex" :key="item.id">{{item}}</li>
        </ul>

      </div>

    </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.back() // 返回上一级
    },
    filterIndex: function (data) {
      var result = []
      for (var i = 0; i < data.length; i++) {
        if (data[i].index) {
          result.push(data[i].index)
        }
      }
      return result
    },
    setScroll: function (ev) {
      var aP = this.$refs.foodkind.getElementsByTagName('p')
      for (var i = 0; i < aP.length; i++) {
        if (aP[i].innerHTML === ev.target.innerHTML) {
          document.documentElement.scrollTop = aP[i].offsetTop
        }
      }
    }
  },
  computed: {
    foodIndex: function () {
      return this.filterIndex(this.foodData)
    }
  },
  mounted: function () {
    this.setListIndexPosition()
  },
  data () {
    return {
      foodData: [
        {
          'index': '优惠',
          'food': [
            {'name': '精选欢聚时光桶T', 'imgurl': '/static/优惠1.jpg', 'price': '￥0.00'},
            {'name': '六味小吃桶T', 'imgurl': '/static/优惠2.jpg', 'price': '￥0.00'},
            {'name': '20块香辣鸡翅T', 'imgurl': '/static/优惠3.jpg', 'price': '￥0.00'}
          ]
        },
        {
          'index': '鸡翅',
          'food': [
            {'name': '10块奥尔良烤翅T', 'imgurl': '/static/鸡翅1.png', 'price': '￥0.00'},
            {'name': '10块香辣鸡翅T', 'imgurl': '/static/鸡翅2.png', 'price': '￥0.00'},
            {'name': '2块新奥尔良烤翅T', 'imgurl': '/static/鸡翅3.png', 'price': '￥0.00'}
          ]
        },
        {
          'index': '小食',
          'food': [
            {'name': '劲爆鸡米花（大）', 'imgurl': '/static/劲爆鸡米花.png', 'price': '￥0.00'},
            {'name': '薯条（中）', 'imgurl': '/static/薯条.png', 'price': '￥0.00'},
            {'name': '黄金鸡块5块装', 'imgurl': '/static/黄金鸡块.png', 'price': '￥0.00'}
          ]
        },
        {
          'index': '饮品',
          'food': [
            {'name': '九珍果汁饮料', 'imgurl': '/static/九珍果汁.png', 'price': '￥0.00'},
            {'name': '百事可乐（中）', 'imgurl': '/static/百事可乐.png', 'price': '￥0.00'},
            {'name': '拿铁（中）', 'imgurl': '/static/拿铁.png', 'price': '￥0.00'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.shopmsg{
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
}
.top1{
  position:fixed;
  z-index: 10;
  background: rgb(185, 185, 185);
  top: 0px;
  left:0;
  width: 100%;
  height: 100px;
}
.top2{
  position:fixed;
  z-index: 10;
  background: #f5f5f5;
  top:100px;
  left:0;
  width:100%;
  height: 80px;
}
.shoppicture{
  text-align: center;
}
.food{
  position: absolute;
  z-index: 1;
  top:200px;
  left:0px;
  width: 100%;
  background: white;
}
.food_kind{
  width:80%;
  margin-left:20%;
}
.food_kind p{
  background: #ebebeb;
  padding: 2px 10px;
  font-size: 13px;
}
.food_kind ul li{
  height: 100px;
  border-bottom: 1px #ebebeb solid;
}
.list_index{
  position: fixed;
  width: 20%;
  left: 0px;
  top: 200px;
  height: 100%;
  font-size: 15px;
  text-align: center;
  color:black;
  background: #ebebeb;
}
.list_index li{
  margin: 10px;
}
.foodphoto{
  width: 80px;
  height: 80px;
  margin-left:10px;
  margin-top:10px;
}
.foodname{
  position: absolute;
  margin-left:20px;
  margin-top:10px;
}
.plus{
  position:absolute;
  width:20px;
  right:10px;
  margin-top: 70px;
}
.foodprice{
  position: absolute;
  margin-top:70px;
  margin-left:20px;
  color:red;
}
.options{
  position: fixed;
  z-index: 10;
  height: 20px;
  top:180px;left:0;
  width:100%;
  background: white;
  border-bottom: 1px solid #ebebeb
}
</style>
