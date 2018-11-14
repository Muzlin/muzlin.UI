<template>
  <button class="mz-button">新增</button>
</template>
<script>
  export default {
    name: 'mz-button'
  }
</script>
<style lang="scss" scoped>
  .mz-button {
    height: var(--button-height);
    font-size: var(--font-size);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    padding: 0 1em;

    &:hover {
      background: var(--button-bg-active);
      border: 1px solid var(--border-color-hover);
    }

    &:focus {
      outline: none;
    }
  }
</style>
