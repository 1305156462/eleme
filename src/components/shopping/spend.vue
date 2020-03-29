<template>
    <div class="spend">
        <div>
            <div @click="back(shop)">
                <img style="position:fixed;z-index:10;height:30px;left:10px;top:10px" src="../../assets/me/左.png"/>
            </div>
            <p style="text-align:center;margin-top:13px;font-size:120%;height:30px">确认订单</p>
        </div>
        <div class="order">
            <div class="list top">
                <span class="text1">{{shopname}}</span>
            </div>
            <div class="list" v-for="(food,index) in cartlist" :key="index" v-show="food.count">
                <span class="text2">{{food.foodname}} ×{{food.count}}</span>
                <span class="text3">￥{{food.price*food.count}}</span>
                <img class="picture" :src="food.imgurl">
            </div>
        </div>
        <div class="list">
          <span class="text3">总计：￥{{cost}}</span>
        </div>
        <div class="list bottom">
            <div @click="check(cartlist)"><span class="check">确认订单</span></div>
        </div>
        <div v-if="popup1" >
          <div class="pleaselogin">
            <p style="color:#f5f5f5;margin-top:30px;">请登录!</p>
            <p @click="closepopup1" style="color:#f5f5f5;margin-top:50px">确定</p>
          </div>
        </div>
        <div v-if="popup2">
            <div class="pleaselogin">
            <p style="color:#f5f5f5;margin-top:30px;">支付成功!</p>
            <p @click="closepopup2(shop)" style="color:#f5f5f5;margin-top:50px">确定</p>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cartlist: '',
      cost: '',
      shop: '',
      shopname: '',
      popup: false,
      popup1: false,
      popup2: false
    }
  },
  methods: {
    back: function (shop) {
      this.$router.push({
        path: '/shop', query: {shop: shop}
      })
    },
    check (cartlist) {
      if (this.$store.state.token) {
        for (var i = 0; i < cartlist.length; i++) {
          if (cartlist[i].count === 0) {
            cartlist.splice(i, 1)
          }
        }
        console.log(cartlist)
        // for (i = 0; i < cartlist.length; i++) {
        //   axios.get('/apis/order', {params: {userid: this.$store.state.id, shopname: this.shopname, foodname: cartlist[i].foodname, count: cartlist[i].count, price: cartlist[i].price}})
        // }
        axios.post('/apis/order', {'userid': this.$store.state.id, 'cartlist': cartlist, 'shopname': this.shopname, 'shopphoto': this.shop.shopphoto})
          .then((res) => {
            if (res.data === '插入订单成功') {
              this.$store.commit('SET_CARTLIST', [])
              this.popup2 = true
            }
          })
      } else {
        this.popup1 = true
      }
    },
    closepopup1 () {
      this.popup1 = false
      this.$router.push({
        path: '/login'
      })
    },
    closepopup2 (shop) {
      this.popup2 = false
      this.$router.push({
        path: '/shop', query: {shop: shop}
      })
      // this.$router.push({
      //   path: '/order'
      // })
    },
    setData () {
      console.log(this.$route.query.shop)
      this.shopname = this.$route.query.shop.shopname
      this.cartlist = this.$store.state.cartlist
      this.shop = this.$route.query.shop
      this.cost = this.$route.query.cost
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.setData())
  }
}
</script>

<style scoped>
.spend{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index:1;
    background:white
}
.top{
    margin-top:20px;
    font-size: 120%
}
.list{
    width:100%;
    height:60px;
    border-bottom: 1px solid #ebebeb
}
.text1{
    position: absolute;
    margin-left:10px;
    margin-top:20px;
}
.text2{
    position: absolute;
    margin-left:60px;
    margin-top:20px;
}
.text3{
    position:absolute;
    right: 20px;
    margin-top:20px;
}
.picture{
    position: absolute;
    width:40px;
    margin-top:10px;
    margin-left:10px;
}
.bottom{
  background:hsl(240, 96%, 69%);
}
.check{
    position: absolute;
    width:100%;
    text-align: center;
    margin-top:12px;
    font-size: 150%;
}
.pleaselogin{
  position:fixed;
  width: 60%;
  height: 150px;
  top:40%;
  left: 50%;
  text-align: center;
  background: rgb(185, 185, 185);
  z-index: 100;
  font-size: 24px;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  z-index: 1000;
  opacity: 0.95

}
</style>
