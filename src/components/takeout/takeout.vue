<template>
    <div class="takeout">
      <search @on-submit="onSubmit" :auto-fixed="false" @on-focus="onFocus" @on-cancel="onCancel"></search>
      <swiper :list="data_list" auto height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
</template>

<script>
import { Search, dateFormat, Swiper } from 'vux'
const imgList = [
  '/static/p1.png',
  '/static/p1.png',
  '//bpic.588ku.com//back_water_img/19/04/18/6f44ceefa65f142e906f016f21453795.jpg!/fw/750/quality/99/unsharp/true/compress/true',
  '//bpic.588ku.com//back_origin_min_pic/19/04/16/1cfebec607678a6b5857610414c7c971.jpg!/fw/750/quality/99/unsharp/true/compress/true'
]
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  components: {
    Search, Swiper
  },
  data () {
    return {
      data_list: demoList
    }
  },
  methods: {
    onSubmit (val) {
      this.overFlag = true
      this.items = []
      this.qryIndex.start = 0
      this.qryIndex.date = dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
      this.qryIndex.findActor = val
      setTimeout(() => {
        this.getIssues()
      }, 500)
    },
    onCancel () {
      this.overFlag = true
      this.items = []
      this.qryIndex.start = 0
      this.qryIndex.date = dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
      this.qryIndex.findActor = ''
      setTimeout(() => {
        this.getIssues()
      }, 500)
    },
    onFocus () {
      console.log('on focus')
    }
  }
}
</script>
