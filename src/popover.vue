<template>
  <div class="popover" @click.stop="xxx"> <!-- 阻止冒泡 多次关闭事件 -->
    <div class="content-wrapper" v-if="visible" @click.stop> <!-- 阻止冒泡 防止选中弹出的popover关闭 -->
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'mz-popover',
    data() {
      return {
        visible: false
      }
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        if (this.visible) {
          this.$nextTick(() => {
            let x = () => {
              this.visible = false
              document.removeEventListener('click', x)
            }
            document.addEventListener('click', x)
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .popover {
    position: relative;

    .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 0 3px rgba(0, 0, 0, .5);
    }
  }
</style>
