<template>
  <div class="cascader-items">
    <div class="left">
      <div class="label" v-for="item, index in items" :key="index" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <mz-cascader-items :items="rightItems"></mz-cascader-items>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mz-cascader-items',
    props: {
      items: {
        type: Array
      }
    },
    data () {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems() {
        return this.leftSelected && this.leftSelected.children || null
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cascader-items {
    border: 1px solid red;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .right{
      margin-top: -1px;
    }
  }
</style>
