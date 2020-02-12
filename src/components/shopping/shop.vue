<template>
    <div class="shopmsg">
      <div class="top1" @click="carts=0">
          <div @click="back">
              <img style="position:fixed;z-index:10;height:20px;left:10px;top:10px" src="../../assets/shop/返回.png"/>
          </div>
          <img style="position:fixed;z-index:10;height:20px;right:10px;top:10px" src="../../assets/shop/搜索.png">
      </div>

      <div class="top2" @click="carts=0"></div>
      <img @click="carts=0" style="position:fixed;z-index:10;width:30%;top:30px;left:35%" src="../../../static/shop/肯德基.png">
      <span @click="carts=0" style="position:fixed;z-index:100;top:140px;width:100%;text-align:center;font-size:120%">{{name}}</span>

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
          <li v-for="item in foodData1" :key="item.id">
            <p>{{item.index}}</p>
            <ul>
              <li v-for="food in item.food" :key="food.id">
                <div class="foodmsg">
                  <img class="foodphoto" :src="food.imgurl"/>
                  <span class="foodname">{{food.name}}</span>
                  <span class="foodprice">￥{{food.price}}</span>
                  <img class="plus" src="../../assets/shop/添加.png" @click="add(food.name,food.price)">
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="list_index" ref="listIndex" @click="carts=0">
          <li  @touchstart="setScroll" v-for="item in foodIndex" :key="item.id">{{item}}</li>
        </ul>
      </div>

      <div class="bottom" @click="carts?carts=false:carts=true">
        <span style="display:flex;color:white;margin-top:10px;margin-left:10px;font-size:120%">已选择{{i}}件,共计{{count}}元</span>
      </div>

      <div v-show="carts" class="carts">
      <div style="position:fixed;z-index:11;background:#edf88c;top:60%;width:100%;height:20px;"></div>
        <scroller>
          <div class="checked">已选商品</div>
            <div class="checklist" v-for="index in i" :key="index">
              <span style="position:absolute;margin-top:15px;">{{addname[index-1]}}</span>
              <img src="../../assets/shop/减.png" @click="cut()" style="position:absolute;width:20px;right:10px;margin-top:15px;">
            </div>
        </scroller>
      </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      j: 0,
      addname: [],
      carts: false,
      i: 0,
      count: 0,
      item: 1,
      foodData1: [
        {
          'index': '优惠',
          'food': [
            {'name': '精选欢聚时光桶T', 'imgurl': '/static/food/优惠1.jpg', 'price': 1.00},
            {'name': '六味小吃桶T', 'imgurl': '/static/food/优惠2.jpg', 'price': 2.00},
            {'name': '20块香辣鸡翅T', 'imgurl': '/static/food/优惠3.jpg', 'price': 3.00}
          ]
        },
        {
          'index': '鸡翅',
          'food': [
            {'name': '10块奥尔良烤翅T', 'imgurl': '/static/food/鸡翅1.png', 'price': 4.00},
            {'name': '10块香辣鸡翅T', 'imgurl': '/static/food/鸡翅2.png', 'price': 5.00},
            {'name': '2块新奥尔良烤翅T', 'imgurl': '/static/food/鸡翅3.png', 'price': 6.00}
          ]
        },
        {
          'index': '小食',
          'food': [
            {'name': '劲爆鸡米花（大）', 'imgurl': '/static/food/劲爆鸡米花.png', 'price': 7.00},
            {'name': '薯条（中）', 'imgurl': '/static/food/薯条.png', 'price': 8.00},
            {'name': '黄金鸡块5块装', 'imgurl': '/static/food/黄金鸡块.png', 'price': 9.00}
          ]
        },
        {
          'index': '饮品',
          'food': [
            {'name': '九珍果汁饮料', 'imgurl': '/static/food/九珍果汁.png', 'price': 9.99},
            {'name': '百事可乐（中）', 'imgurl': '/static/food/百事可乐.png', 'price': 9.99},
            {'name': '拿铁（中）', 'imgurl': '/static/food/拿铁.png', 'price': 9.99}
          ]
        }
      ]
    }
  },
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
    },
    setData () {
      this.name = this.$route.query.shop.name
    },
    add (data1, data2) {
      this.i++
      this.count = this.count + data2
      this.addname[this.j] = data1
      this.j++
    },
    cut () {
      this.i--
    }
  },
  computed: {
    foodIndex: function () {
      return this.filterIndex(this.foodData1)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setData())
  },
  mounted: function () {
    this.$http.get('/api/foodData1')
    // .then((data) => {
    //   for (let i = 0; i < 100; i++) {
    //     this.foodData1.push(data.data.data[i])
    //   }
    // })
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
  z-index: 9;
  top:200px;
  left:0px;
  width: 100%;
  background: white;
  margin-bottom:50px;
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
.carts{
  position: fixed;
  background: #f5f5f5;
  z-index:10;
  left:0;
  width:100%;
  top:60%;
  bottom:50px;

}
.checked{
  font-size:110%;
  margin-left:10px;
  margin-top:30px;
  color:gray;
}
.checklist{
  position: relative;
  margin-left:10px;
  height:50px;
  border-bottom: 1px solid #ebebeb;
}
.bottom{
  position:fixed;
  height:50px;
  width:100%;
  left:0;
  bottom:0;
  z-index: 11;
  background: #7a7575
}
</style>
