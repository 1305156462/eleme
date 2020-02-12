<template>
  <div class="login">
    <div class="bg">
      <div @click="back">
        <img style="position:fixed;z-index:10;height:30px;left:10px;top:10px" src="../assets/me/左.png"/>
      </div>
      <div class="loginContent" @keyup.enter="gotoeleme">
        <div class="Username">
          <span>账号</span>
          <input type="text" ref="Username" >
        </div>
        <div class="Password">
          <span>密码</span>
          <input type="password" ref="Password">
        </div>
        <div class="loginBotton">
          <input type="button" value="登录" @click="gotoeleme">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoeleme () {
      console.log(this.$refs.Username.value)
      console.log(this.Username)
      if (this.$refs.Username.value === this.Username && this.$refs.Password.value === this.Password) {
        console.log('登录成功')
        this.$store.commit('SET_TOKEN', true)
        this.$router.push({path: '/takeout'})
      }
    },
    back () {
      this.$router.back() // 返回上一级
    }
  },
  data () {
    return {
      Username: this.$store.state.name,
      Password: '123'
    }
  }
}
</script>

<style scoped>
.login{
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
}
.bg{
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  z-index:-1;
  opacity: 9;
  background: url('../../static/登录.png');
  background-size: 100% 100%;
  justify-items: center;
}
.loginContent{
  position: fixed;
  top: 0px;
  bottom: 0px;
  width:100%;
  height:100%;
  background-color: rgb(255, 255, 255, 0.158);
  font-size: 20px;
  color:black;
}
.Username{
  width:100%;
  position: fixed;
  top: 200px;
  padding: 10px 0px;
  text-align: center;
}
.Username input{
  width:70%;
  background: none;
  outline:none;
  border-style: none;
  color:black;
  font-size: 19px;
  border-bottom: 2px solid black;
}
.Password{
  position: fixed;
  top: 250px;
  padding: 10px 0px;
  width:100%;
  text-align: center;
}
.Password input{
  width:70%;
  background: none;
  outline:none;
  border-style: none;
  color:black;
  font-size: 19px;
  border-bottom: 2px solid black;
}
.loginBotton{
  position: fixed;
  top: 300px;
  padding: 10px 0px;
  width: 100%;
  text-align: center;
}
.loginBotton input{
  outline:none;
  border-style: none;
  background-color: blue;
  color:white;
  font-size: 18px;
  padding: 5px 10px;
  width: 70%;
  border-radius: 4px;
}
</style>
