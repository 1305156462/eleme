<template >
    <div class="order">
        <div class="top">
          <span style="position:absolute;margin-left:20px;margin-top:10px">我的订单</span>
          <img style="position:absolute;height:20px;right:10px;margin-top:15px" src="../../assets/shop/搜索.png">
        </div>
        <!-- <scroller class="scroller" :on-refresh="refresh" :on-infinite="infinite" :noDataText="'--没有历史订单了--'" ref="my_scroller" > -->
          <ul>
            <li class="scrollermsg" v-for="(order,index) in orderData" :key="index">
              <div class="ordermsg">
                <img class="orderphoto" :src="order.shopphoto"/>
                <span class="ordername">{{order.shopname}}</span>
                <span class="orderfood">{{order.foodname}} 等{{order.count}}件</span>
                <span class="orderprice">￥{{order.price}}</span>
                <span class="ordertime">{{order.createtime | time}}</span>
                <img class="into" src="../../assets/order/右.png">
              </div>
            </li>
          </ul>
        <!-- </scroller> -->
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/index.js'
import moment from 'moment'
export default {
  data () {
    return {
      orderData: [],
      bottom: -1
    }
  },
  filters: {
    time (value) {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  beforeRouteEnter (to, from, next) {
    if (store.state.token) {
      next(vm => vm.setData())
    } else {
      console.log('请先登录')
      next('/login')
    }
  },
  // mounted () {
  //   this.$http.get('/api/orderData')
  //     .then((data) => {
  //       for (let i = 0; i < 6; i++) {
  //         this.orderData.push(data.data.data[i])
  //       }
  //       this.bottom = 5
  //     })
  // },
  methods: {
    setData () {
      axios.get('/apis/getorder', {params: {userid: this.$store.state.id}})
        .then((data) => {
          console.log(data.data.data)
          this.orderData = data.data.data
        })
    },
    refresh (done) {
      console.log('refresh')
      // this.$refs.my_scroller.finishPullToRefresh()
    }
    // infinite (done) {
    //   console.log('infinite')
    //   console.log('bottom:' + this.bottom)
    //   if (this.bottom >= 20) {
    //     setTimeout(() => {
    //       done(true)
    //     }, 500)
    //     return
    //   }
    //   setTimeout(() => {
    //     this.getIssues()
    //     done()
    //   }, 1000)
    // },
    // getIssues () {
    //   console.log('1')
    //   this.$http.get('/api/orderData')
    //     .then((res) => {
    //       console.log(res.data.data)
    //       let start = this.bottom + 1
    //       // console.log(start)
    //       // console.log(this.bottom)
    //       for (let i = start; i < start + 6; i++) {
    //         console.log(i)
    //         this.orderData.push(res.data.data[i])
    //         // this.orderData[i] = data.data.data[i]
    //       }
    //       this.bottom = this.bottom + 6
    //     }, (err) => {
    //       console.log(err)
    //     })
    // }
  }
}
</script>

<style scoped>
.order{
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  margin-bottom: 50px;
}
.top{
  height:50px;
  font-size:150%;
  background: #f5f5f5;
}
.scroller{
  padding: 0px 0px;
  top: 50px;
  margin-bottom: 50px;
  left: 0;
  right:0;
  overflow: hidden;
  height: 100px;
}
.ordermsg{
  height: 120px;
  border-left: 5px #f5f5f5 solid;
  border-bottom: 5px #f5f5f5 solid;
  border-right: 5px #f5f5f5 solid;
}
.orderphoto{
  width: 100px;
  height: 100px;
  margin-left:10px;
  margin-top:10px;
}
.ordername{
  position: absolute;
  margin-left:20px;
  margin-top:10px;
}
.orderfood{
  position: absolute;
  margin-left:20px;
  margin-top:80px;
  font-size:90%;
}
.ordercount{
  position: absolute;
  margin-left:20px;
  margin-top:70px;
  font-size:80%;
}
.into{
  position:absolute;
  width:20px;
  right:20px;
  margin-top: 10px;
}
.orderprice{
  position: absolute;
  margin-top:80px;
  right:20px;
}
.ordertime{
  position:absolute;
  margin-top:40px;
  margin-left:20px;
  font-size:80%;
  color:gray;
}
</style>
