<template>
    <div class="shopmsg">
      <div class="top1" @click="carts=0">
          <div @click="back">
              <img style="position:fixed;z-index:10;height:20px;left:10px;top:10px" src="../../assets/shop/返回.png"/>
          </div>
          <img style="position:fixed;z-index:10;height:20px;right:10px;top:10px" src="../../assets/shop/搜索.png">
      </div>

      <div class="top2" @click="carts=0"></div>
      <img @click="carts=0" style="position:fixed;z-index:10;width:30%;top:30px;left:35%" :src="shopphoto">
      <span @click="carts=0" style="position:fixed;z-index:100;top:140px;width:100%;text-align:center;font-size:120%">{{shopname}}</span>

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
          <li v-for="(food,index) in foodData" :key="index">
            <p v-show="food.classification">{{food.classification}}</p>
            <ul>
              <li>
                <div class="foodmsg">
                  <img class="foodphoto" :src="food.imgurl"/>
                  <span class="foodname">{{food.foodname}}</span>
                  <span class="foodprice">￥{{food.price}}</span>
                  <carts :foodmsg='food' @addfood="countadd" @cutfood="countcut"></carts>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="list_index" ref="listIndex" @click="carts=0">
          <li  @touchstart="setScroll" v-for="item in foodIndex" :key="item.id">{{item}}</li>
        </ul>
      </div>

      <div class="bottom">
        <span @click="carts?carts=false:carts=true" style="display:flex;color:white;margin-top:10px;margin-left:10px;font-size:120%">已选择{{i}}件,共计{{cost}}元</span>
        <div @click="gotospend(shop,cost)" class="spend" :class="{active: cango}"><span :class="{active: cango}" style="display:flex;color:black;margin-top:10px;margin-left:25%;font-size:120%">去结算</span></div>
      </div>

      <div v-show="carts" class="shopcart">
      <div style="position:fixed;z-index:11;background:#edf88c;top:60%;width:100%;height:20px;"></div>
        <scroller>
          <div class="checked">已选商品</div>
            <div class="checklist" v-for="(food,index) in cartlist" :key="index" v-show="food.count">
              <span style="position:absolute;margin-top:15px;">{{food.foodname}}</span>
              <span style="position:absolute;margin-top:15px;right:10px;">{{food.count}}</span>
            </div>
        </scroller>
      </div>

    </div>
</template>

<script>
import axios from 'axios'
import carts from '@/components/shopping/carts'
export default {
  data () {
    return {
      shop: '',
      shopname: '',
      cartlist: [],
      carts: false,
      i: 0,
      cost: 0.00,
      foodData: [],
      shopphoto: '',
      cango: false
    }
  },
  components: {carts},
  methods: {
    gotospend: function (shop, cost) {
      if (this.cango === true) {
        this.$store.commit('SET_CARTLIST', this.cartlist)
        console.log(this.$store.state.cartlist)
        this.$router.push({path: '/spend', query: {shop: shop, cost: cost}})
      }
    },
    back () {
      this.cartlist.splice(0, this.cartlist.length)
      this.$store.commit('SET_CARTLIST', this.cartlist)
      this.i = 0
      this.cost = 0
      this.cango = false
      this.$router.push({path: '/shopping'})
    },
    filterIndex: function (data) {
      var result = []
      for (var i = 0; i < data.length; i++) {
        if (data[i].classification) {
          result.push(data[i].classification)
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
      // this.cartlist = this.$store.state.cartlist
      this.shopname = this.$route.query.shop.shopname
      this.shopphoto = this.$route.query.shop.shopphoto
      this.shop = this.$route.query.shop

      // for (var index = 0; index < this.cartlist.length; index++) {
      //   if (this.cartlist[index].count !== 0) {} else { this.i = 0; this.cost = 0 }
      // }
      if (!this.cartlist) {
        console.log('i', this.i)
        console.log('cost', this.cost)
        this.i = 0
        this.cost = 0
      }
      axios.get('/apis/getfoodlist', {params: {shopname: this.shopname}})
        .then((data) => {
          for (var i = 0; i < data.data.length; i++) {
            data.data[i].count = 0
          }
          this.foodData = data.data
          console.log('原foodDate', this.foodData)
          console.log('cartlist:', this.cartlist)
          for (i = 0; i < this.cartlist.length; i++) {
            for (var j = 0; j < this.foodData.length; j++) {
              if (this.cartlist[i].foodname === this.foodData[j].foodname) { this.foodData[j].count = this.cartlist[i].count }
            }
          }
          console.log('传count后的foodDate', this.foodData)
        })
    },
    countadd: function (data) {
      this.i++
      this.cost += data.price
      var index
      this.cango = true
      for (index = 0; index < this.cartlist.length; index++) {
        if (data.foodname === this.cartlist[index].foodname) {
          this.cartlist[index].count = data.count
          return
        }
      }
      if (index === this.cartlist.length) {
        this.cartlist.push({
          foodname: data.foodname,
          count: data.count,
          price: data.price,
          imgurl: data.imgurl})
      }
    },
    countcut: function (data) {
      this.i--
      this.cost -= data.price
      var index
      if (this.i === 0) {
        this.cango = false
      }
      for (index = 0; index < this.cartlist.length; index++) {
        if (data.foodname === this.cartlist[index].foodname) {
          if (data.count === 0) {
            this.cartlist.splice(index, 1)
          } else {
            this.cartlist[index].count = data.count
          }
        }
      }
    }
  },
  computed: {
    foodIndex: function () {
      return this.filterIndex(this.foodData)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setData())
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
  position: absolute;
  width: 80px;
  height: 80px;
  margin-left:10px;
  margin-top:10px;
}
.foodname{
  position: absolute;
  margin-left:110px;
  margin-top:10px;
}
.foodprice{
  position: absolute;
  margin-top:70px;
  margin-left:110px;
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
.shopcart{
  position: fixed;
  background: #f5f5f5;
  z-index:10;
  left:0;
  width:100%;
  top:60%;
  bottom:50px;

}
.checked{
  position: relative;
  height:20px;
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
  width:70%;
  left:0;
  bottom:0;
  z-index: 11;
  background: #7a7575
}
.carts{
  position:absolute;
  right:10px;
  margin-top: 0px;
}
.spend{
  position:fixed;
  width: 30%;
  height:50px;
  bottom:0px;
  right:0px;
  background: #ebebeb;
}
.active{
  background:rgb(69, 187, 75);
}
</style>
