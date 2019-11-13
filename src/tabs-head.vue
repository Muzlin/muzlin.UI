<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
  export default {
    name: 'mz-tabs-head',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (name, vm) => {
        // 获取当前tab item元素的信息
        let {width, height, top, left} = vm.$el.getBoundingClientRect() // 原生JS获取元素的宽高等信息
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
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
      transition: all .3s;
    }
  }
</style>
