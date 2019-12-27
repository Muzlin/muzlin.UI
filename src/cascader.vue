<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover">
      <mz-cascader-items :items="source"></mz-cascader-items>
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .cascader {
    .trigger {
      border: 1px solid;
      height: $height;
      width: 100px;
    }

    .popover {
      height: 200px;
      border: 1px solid;
      display: flex;

      .label {
        white-space: nowrap;
      }
    }
  }
</style>
