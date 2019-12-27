<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item, index in items" :key="index" @click="leftSelected = item">
        {{item.name}}
        <mz-icon v-if="item.children" name="right"></mz-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <mz-cascader-items :items="rightItems" :height="height"></mz-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'mz-cascader-items',
    components: {
      'mz-icon': Icon
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
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
  @import "var";
  .cascader-items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left{
      height: 100%;
      padding: .3em 0;
    }
    .right{
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label{
      cursor: pointer;
      padding: .3em 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .mz-icon {
        margin-left: 1em;
        transform: scale(.7);
      }
    }
  }
</style>
