<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="(item, index) in source" :key="index">
        <CascaderItem :sourceItem="item"></CascaderItem>
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItem from './cascader-item'
export default {
  name: 'mz-cascader',
  components: {
    CascaderItem
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
  .cascader{
    border: 1px solid;
  }
</style>
