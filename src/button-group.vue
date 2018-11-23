<template>
  <div class="mz-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted() {
      for (let node of this.$el.children) {
        if (node.nodeName.toLowerCase() !== 'button') {
          console.error('mz-button-group 的子元素应为 g-button')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mz-button-group {
    display: inline-flex;
    vertical-align: middle;

    >.mz-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:hover {
        // 解决鼠标移上去没有左边框
        position: relative;
        z-index: 1;
      }

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }
  }
</style>
