<template>
    <div class="carts">
        <div>
            <img style="position:absolute;width:20px;right:10px;margin-top:70px;" class="plus" src="../../assets/shop/添加.png" @click="add(food)">
            <div v-show="food.count">
            <span style="position:absolute;right:40px;margin-top:70px;color:gray">{{food.count}}</span>
            <img src="../../assets/shop/减.png" @click="cut(food)" style="position:absolute;width:20px;right:60px;margin-top:70px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    add (data) {
      this.food.count++
      this.$emit('addfood', data)
    },
    cut (data) {
      this.food.count--
      this.$emit('cutfood', data)
    }
  }
}
</script>

<style scoped>

</style>
