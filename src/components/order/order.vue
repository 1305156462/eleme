<template >
    <div class="order">
      <div class="order_all">
        <scroller class="scroller" :on-refresh="refresh" :on-infinite="infinite" :noDataText="'--我也是有底线的--'" ref="my_scroller" >
          <ul>
            <li class="scrollermsg" v-for="(order,index) in orderData" :key="index">
              <div class="ordermsg">
                <img class="orderphoto" :src="order.imgurl"/>
                <span class="ordername">{{order.name}}</span>
                <span class="orderprice">{{order.price}}</span>
                <span class="ordertime">{{order.time}}</span>
                <img class="into" src="../../assets/order/右.png">
              </div>
            </li>
          </ul>
        </scroller>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      orderData: [],
      overFlag: true,
      bottom: -1
    }
  },
  mounted () {
    this.$http.get('/api/orderData')
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          this.orderData.push(data.data.data[i])
        }
        this.bottom = 4
      })
  },
  methods: {
    refresh (done) {
      console.log('refresh')
    },
    infinite (done) {
      console.log('infinite')
      console.log('bottom:' + this.bottom)
      if (this.bottom >= 14) {
        setTimeout(() => {
          done(true)
        }, 500)
        return
      }
      setTimeout(() => {
        this.getIssues()
        done()
      }, 1000)
    },

    getIssues () {
      console.log('1')
      this.$http.get('/api/orderData')
        .then((res) => {
          console.log(res.data.data)
          let start = this.bottom + 1
          // console.log(start)
          // console.log(this.bottom)
          for (let i = start; i < start + 5; i++) {
            console.log(i)
            this.orderData.push(res.data.data[i])
            // this.orderList[i] = data.data.data[i]
          }
          this.bottom = this.bottom + 5
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.order{
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
}
.scroller{
  padding: 0px 0px;
  top: 0px;
  margin-bottom: 50px;
  left: 0;
  right:0;
  overflow: hidden;
  height: 100px;
}
.order_all{
  position: fixed;
  height: 100%;
  top:0px;
  left:0px;
  width: 100%;
  background: white;
  margin-bottom: 50px;
}
.ordermsg{
  height: 100px;
  border-bottom: 1px #ebebeb solid;
}
.orderphoto{
  width: 80px;
  height: 80px;
  margin-left:10px;
  margin-top:10px;
}
.ordername{
  position: absolute;
  margin-left:20px;
  margin-top:10px;
}
.into{
  position:absolute;
  width:20px;
  right:20px;
  margin-top: 10px;
}
.orderprice{
  position: absolute;
  margin-top:70px;
  right:20px;
}
.ordertime{
  position:absolute;
  margin-top:60px;
  margin-left:20px;
  font-size:80%;
  color:gray;
}
</style>
