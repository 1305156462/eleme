<template>
    <div class="takeout">
      <search @on-submit="onSubmit" :auto-fixed="false" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <swiper class="swiper" :list="data_list" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
</template>

<script>
import { Search, dateFormat, Swiper } from 'vux'
const imgList = [
  '/static/p1.png',
  '/static/p2.png',
  '/static/p3.png'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  components: {
    Search, Swiper, dateFormat
  },
  data () {
    return {
      data_list: demoList
    }
  }

}
</script>

<style>
.takeout{
  top: 0px;
  left: 0;
  right: 0;
  position: absolute;
}
</style>
