<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
  export default {
    name: 'mz-tabs-head',
    inject: ['eventBus'],
    created () {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    }
  }
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;

  .tabs-head {
    border: 1px solid;
    display: flex;
    justify-content: flex-start;
    height: $tab-height;
    position: relative;

    >.actions-wrapper {
      margin-left: auto;
    }

    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      width: 100px;
    }
  }
</style>
