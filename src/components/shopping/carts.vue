<template>
    <div class="carts">
        <div>
            <img style="position:absolute;width:20px;right:10px;margin-top:70px;" class="plus" src="../../assets/shop/添加.png" @click="add(getfood)">
            <div v-show="getfood.count">
            <span style="position:absolute;right:40px;margin-top:70px;color:gray">{{getfood.count}}</span>
            <img src="../../assets/shop/减.png" @click="cut(getfood)" style="position:absolute;width:20px;right:60px;margin-top:70px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    foodmsg: {}
  },
  computed: {
    getfood () {
      return this.foodmsg
    }
  },
  methods: {
    add (data) {
      data.count++
      this.$emit('addfood', data)
      console.log(data.count)
    },
    cut (data) {
      data.count--
      this.$emit('cutfood', data)
    }
  }
}
</script>

<style scoped>

</style>
