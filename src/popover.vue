<template>
  <div class="popover" @click.stop="xxx">
    <!-- 阻止冒泡 多次关闭事件 -->
    <div class="content-wrapper" ref="popoverContent" v-if="visible" @click.stop>
      <!-- 阻止冒泡 防止选中弹出的popover关闭 -->
      <slot name="content"></slot>
    </div>
    <span ref="popoverTrigger">
      <slot></slot>
    </span>
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
            // 将弹出的popover内容移到body里面
            document.body.appendChild(this.$refs.popoverContent)
            // 获取按钮的位置
            let { width, height, top, left } = this.$refs.popoverTrigger.getBoundingClientRect()
            // 将popoverContent的位置改变到按钮上面 tips:获取的高度是相对视窗的高度 所以要加上视窗已经滚动的距离
            this.$refs.popoverContent.style.left = `${left+window.scrollX}px`
            this.$refs.popoverContent.style.top = `${top+window.scrollY}px`
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
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }
</style>
