<template>
    <div class="me">
        <div class="p1">
            <p style="margin-left: 10px;margin-top: 10px">我的</p>
            <router-link tag="div" class="msg" to="/1">
                <img src="../../assets/me/通知.png" height="20" width="20">
            </router-link>
            <router-link tag="div" class="set" to="/1">
                <img src="../../assets/me/设置.png" height="20px">
            </router-link>
            <router-link tag="div" class="head" to="/1">
                <img src="../../assets/tab/饿了么1.png" height="60px">
                <p class="personal">name:liu</p><p class="personal">phone:180****</p>
            </router-link>
        </div>
        <div class="p2">
            <router-link tag="div" class="wallet border" to="/1">
                <p style="margin-left:40px;margin-top:10px;color:blue">{{ money }}元<br><span style="color:black">钱包</span></p>
            </router-link>
            <router-link tag="div" class="redwallet border" to="/1">
                <p style="margin-left: 40px;margin-top:10px;color:red">{{ number1 }}个<br><span style="color:black">红包</span></p>
            </router-link>
            <router-link tag="div" class="gold" to="/1">
                <p style="margin-left: 40px;margin-top:10px;color:orange">{{ number2 }}个<br><span style="color:black">金币</span></p>
            </router-link>
        </div>
        <div class="p3">
            <div class="collect">
                <img class="picture" src="../../assets/me/收藏.png">
                <span style="margin-left:20px;margin-top:10px">我 的 收 藏</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/奖品.png">
                <span style="margin-left:20px;margin-top:10px">推 荐 有 奖</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/商城.png">
                <span style="margin-left:20px;margin-top:10px">金 币 商 城</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/红包.png">
                <span style="margin-left:20px;margin-top:10px">签 到 领 红 包</span>
            </div>
            <!-- <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div>
            <div class="border-bottom">
                <img class="picture" src="../../assets/me/信用卡.png">
                <span style="margin-left:20px;margin-top:10px">饿 了 么 联 名 卡</span>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      money: '0.00',
      number1: '0',
      number2: '0'
    }
  }

}
</script>

<style>
.p1{
  top: 0px;
  left: 0;
  right: 0;
  background:  hsl(240, 96%, 69%);
  height: 130px;
  color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1;
}
.p2{
    position: fixed;
    top: 130px;
    left: 0;
}
.p3{
    position: fixed;
    top: 190px;
    left: 0;
    width: 100%;
}
.head img{
    position: absolute;
    margin-left: 20px
}
.personal{
    color: #fff;
    margin-left: 120px;
    margin-top:20px
}
.msg img{
    position: absolute;
    top: 10px;
    right:50px;
}
.set img{
    position: absolute;
    top:10px;
    right: 10px;
}
.wallet{
    width:33%;
}
.redwallet{
    width:33%;
    left:33%
}
.gold{
    position: fixed;
    height: 60px;
    width: 33%;
    left: 67%;
    display: flex;
}
.border{
    position: fixed;
    height: 60px;
    border-right: 1px solid #ebebeb;
}
.collect{
    display: flex;
    height: 40px;
    border-top: 10px solid #ebebeb;
    border-bottom: 10px solid #ebebeb;
}
.picture{
    height: 20px;
    margin-left: 20px;
    margin-top: 10px
}
.border-bottom{
    display: flex;
    height: 40px;
    border-bottom: 1px solid #ebebeb;
}
</style>
