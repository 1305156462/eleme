<template>
    <div class="personal">
        <div style="height:40px;width:100%;position:fixed;background:white;">
            <div @click="back">
                <img style="position:fixed;z-index:10;height:30px;left:10px;top:10px" src="../../assets/me/左.png"/>
            </div>
            <p style="position:fixed;width:100%;text-align:center;margin-top:13px;font-size:120%;height:30px;">个人资料</p>
        </div>
        <div class="tip1">基础信息</div>
        <div class="list" @click="gotochangephoto">
            <span class="text1">头像</span>
            <img :src="this.$store.state.photo" style="height:50px;width:50px;position:absolute;right:40px;margin-top:5px">
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list" @click="gotochangename">
            <span class="text1">用户名</span>
            <span style="position:absolute;right:40px;margin-top:20px;color:gray">{{this.$store.state.name}}</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text1">收货地址</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="tip2">账号绑定</div>
        <div class="list">
            <span class="text2">手机</span>
            <img class="tool" src="../../assets/me/手机.png">
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text2">淘宝</span>
            <img class="tool" src="../../assets/me/淘宝.png">
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text2">支付宝</span>
            <img class="tool" src="../../assets/me/支付宝.png">
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text2">微博</span>
            <img class="tool" src="../../assets/me/微博.png">
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text2">微信</span>
            <img class="tool" src="../../assets/me/微信.png">
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text2">QQ</span>
            <img class="tool" src="../../assets/me/QQ.png">
            <img class="picture" src="../../assets/order/右.png">
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'
import axios from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back() // 返回上一级
    },
    gotochangename () {
      this.$router.push({
        path: '/changename'
      })
    },
    gotochangephoto () {
      this.$router.push({
        path: '/changephoto'
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (store.state.token) {
      axios.post('/apis/update', {'id': store.state.id})
        .then((user) => {
          console.log(user.data)
          if (user.data.id) {
            store.commit('SET_NAME', user.data.username)
            store.commit('SET_PHOTO', user.data.photo)
          }
        })
      next()
    } else {
      console.log('请先登录')
      next('/login')
    }
  }
}
</script>

<style scoped>
.personal{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index:1;
    background:white;
}
.tip1{
    font-size:90%;
    margin-top:60px;
    margin-left:10px;
    margin-bottom: 10px;
    color: gray;
}
.tip2{
    font-size:90%;
    margin-top:20px;
    margin-left:10px;
    margin-bottom: 10px;
    color: gray;
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
.picture{
  position:absolute;
  width:20px;
  right:10px;
  margin-top: 20px;
}
.tool{
    position: absolute;
    width:40px;
    margin-top:10px;
    margin-left:10px;
}
</style>
