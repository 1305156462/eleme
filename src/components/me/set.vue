<template>
    <div class="set">
        <div>
            <div @click="back">
                <img style="position:fixed;z-index:10;height:30px;left:10px;top:10px" src="../../assets/me/左.png"/>
            </div>
            <p style="text-align:center;margin-top:13px;font-size:120%;height:30px;">设置</p>
        </div>
        <div class="list top">
            <span class="text">账户安全</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text">通用</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text">欢迎评分</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text">关于饿了么</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text">隐私</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <span class="text">意见反馈</span>
            <img class="picture" src="../../assets/order/右.png">
        </div>
        <div class="list">
            <div @click="out"><span class="exit">退出登录</span></div>
        </div>
    </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back() // 返回上一级
    },
    out () {
      console.log('退出登录')
      this.$store.commit('SET_TOKEN', false)
      this.$store.state.name = ''
      this.$store.state.code = ''
      this.$store.state.id = ''
      this.$store.state.photo = '/static/userphoto/饿了么.png'
      this.$router.push({
        path: '/me'
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.path)
    if (store.state.token) {
      next()
    } else {
      console.log('请先登录')
      next('/login')
    }
  }
}
</script>

<style scoped>
.set{
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
}
.list{
    width:100%;
    height:60px;
    border-bottom: 1px solid #ebebeb
}
.text{
    position: absolute;
    margin-left:10px;
    margin-top:20px;
}
.picture{
  position:absolute;
  width:20px;
  right:10px;
  margin-top: 20px;
}
.exit{
    position: absolute;
    width:100%;
    text-align: center;
    margin-top:12px;
    font-size: 150%;
    color: red;
}
</style>
