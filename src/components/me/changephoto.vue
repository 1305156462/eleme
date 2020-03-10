<template>
    <div class="changephoto">
        <div>
            <div @click="back">
                <img style="position:fixed;z-index:10;height:30px;left:10px;top:10px" src="../../assets/me/左.png"/>
            </div>
            <p style="text-align:center;margin-top:13px;font-size:120%;height:30px;">修改头像</p>
        </div>

        <div class="img_box">
          <div class="img_size" v-for="(item,index) in imgShow" :key="index">
            <img :src="item.src" alt="">
            <div class="remove_logo" @click="fileDel">×</div>
          </div>
          <div class="addImg" @click="fileClick" v-if="imgArr.length<1">
            <span>+</span>
            <p class="add" style="font-size: 20px">上传图片</p>
            <input id="input" type="file"  @change="getFile($event)"  accept="image/jpg,image/png,image/bmp,image/gif" style="display: none">
          </div>
        </div>

        <div>
            <input class="saveButton" type="button" value="确认修改" @click="save" :class="{active:canchange}">
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      imgArr: [],
      imgShow: [],
      canchange: false
    }
  },
  methods: {
    back () {
      this.$router.back() // 返回上一级
    },
    fileClick () {
      document.getElementById('input').click()
    },
    getFile (event) {
      this.canchange = true
      var file = event.target.files[0]
      let that = this
      var imgName = file.name
      var idx = imgName.lastIndexOf('.')
      if (idx !== -1) {
        var ext = imgName.substr(idx + 1).toUpperCase()
        ext = ext.toLowerCase()
        if (ext !== 'jpg' && ext !== 'png' && ext !== 'bmp' && ext !== 'gif') {
        } else {
          this.imgArr.push(file)
        }
      } else {
      }
      // 展示上传的图片
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        file.src = this.result
        that.imgShow.push(file)
      }
    },
    fileDel () {
      this.imgArr.splice(0, 1)
      this.imgShow.splice(0, 1)
      this.canchange = false
    },
    save () {
      if (this.imgArr) {
        var formData = new FormData()
        formData.append('file', this.imgArr[0])
        formData.append('id', this.$store.state.id)
        formData.append('path', 'D:\\VUE\\eleme\\static\\userphoto\\')
        axios.post('/apis/changephoto', formData, {headers: {'Content-type': 'multipart/form-data'}})
          .then((data) => {
            console.log(data)
            this.$store.state.photo = data.data.photopath
          })
        console.log(this.$store.state.photo)
        this.$router.back()
      }
    }
  }
}
</script>

<style scoped>
.changephoto{
    position: fixed;
    height: 100%;
    width:100%;
    background: white;
    top:0;
    left:0;
    z-index: 1;
}
.newphoto{
    width:60%;
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
    width:40%;
    height:40px;
    margin-left:30%;
    margin-top:300px;
    text-align: center;
    font-size: 120%;
    color: white;
    background:rgb(207, 207, 207)
}
.img_box{
  position: fixed;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  width: 80%;
  left:10%;
  background-color: rgb(255, 255, 255);
}
.img_size img {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 0px;
}
.remove_logo {
  color: #777777;
  position: relative;
  text-align: center;
  vertical-align: center;
  width: 40px;
  height: 40px;
  font-size: 28px;
  top: -220px;
  left: 200px;
  background: rgb(185, 185, 185);
  border-radius: 25px;
}
.addImg {
  margin: 20px;
  text-align: center;
  vertical-align: center;
  font-size: 120px;
  color: #777777;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 200px;
  height: 200px;
}
.active{
  background: blue;
}
</style>
