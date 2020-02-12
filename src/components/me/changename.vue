<template>
    <div class="changename">
        <div>
            <div @click="back">
                <img style="position:fixed;z-index:10;height:30px;left:10px;top:10px" src="../../assets/me/左.png"/>
            </div>
            <p style="text-align:center;margin-top:13px;font-size:120%;height:30px;">修改用户名</p>
        </div>
        <div>
            <input class="input" type="text" placeholder="请 输 入 用 户 名" ref="sName" />
        </div>
        <div>
            <p class="tip">用户名只能修改一次，5-24个字</p>
            <input class="saveButton" type="button" value="确认修改" @click="save" />
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back() // 返回上一级
    },
    save () {
      this.text = this.$refs.sName.value
      if (this.text !== '' && this.text.length >= 5 && this.text.length <= 24) {
        console.log('修改成功')
        this.$store.state.name = this.text
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped>
.changename{
    position: fixed;
    height: 100%;
    width:100%;
    background: white;
    top:0;
    left:0;
    z-index: 1;
}
.input{
    height: 30px;
    margin-left:5%;
    margin-top:20px;
    width:90%;
    outline:none;
    border-style: none;
    font-size:100%;
    border-bottom: 1px solid #ebebeb
}
.tip{
    width:90%;
    margin-left:5%;
    height: 30px;
    font-size:80%;
    color:gray;
    margin-top:10px;
}
.saveButton{
    position: absolute;
    width:90%;
    height:40px;
    margin-left:5%;
    text-align: center;
    font-size: 120%;
    color: white;
    background:rgb(207, 207, 207)
}
</style>
