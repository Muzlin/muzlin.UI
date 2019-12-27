<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <mz-cascader-items :items="source" :height="popoverHeight"></mz-cascader-items>
    </div>
  </div>
</template>
<script>
  import CascaderItems from './cascader-items'
  export default {
    name: 'mz-cascader',
    components: {
      'mz-cascader-items': CascaderItems
    },
    props: {
      source: {
        type: Array,
        required: true
      },
      popoverHeight: {
        type: String
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .cascader {
    position: relative;
    .trigger {
      border: 1px solid;
      height: $height;
      width: 100px;
    }

    .popover-wrapper {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      background: #fff;
      height: 200px;
      display: flex;
      @extend .box-show;

      .label {
        white-space: nowrap;
      }
    }
  }
</style>
