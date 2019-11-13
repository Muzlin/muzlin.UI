<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mz-tabs-head'
  }
</script>
<style lang="scss" scoped>
  $tab-height: 40px;

  .tabs-head {
    border: 1px solid;
    display: flex;
    justify-content: flex-start;
    height: $tab-height;

    >.actions-wrapper {
      margin-left: auto;
    }
  }
</style>
