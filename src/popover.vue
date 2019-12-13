<template>
  <div class="popover" @click="onClick">
    <div class="content-wrapper" ref="popoverContent" v-if="visible">
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
      // 定位弹出内容
      positionContent() {
        // 将弹出的popover内容移到body里面
        document.body.appendChild(this.$refs.popoverContent)
        // 获取按钮的位置
        let { width, height, top, left } = this.$refs.popoverTrigger.getBoundingClientRect()
        // 将popoverContent的位置改变到按钮上面 tips:获取的高度是相对视窗的高度 所以要加上视窗已经滚动的距离
        this.$refs.popoverContent.style.left = `${left+window.scrollX}px`
        this.$refs.popoverContent.style.top = `${top+window.scrollY}px`
      },
      // document监听函数
      onClickDocument(e) {
        // 如果是点击的是按钮或者弹窗就不做操作
        if ((this.$refs.popoverContent && this.$refs.popoverContent.contains(e.target)) || this.$refs.popoverTrigger
          .contains(e.target)) {
          return
        }
        this.close()
      },
      // 打开弹窗
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          // 监听document
          document.addEventListener('click', this.onClickDocument)
        })
      },
      // 关闭弹窗
      close() {
        this.visible = false
        // 每次关闭都移除对document的监听
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick() {
        // 是否点击的是按钮
        if (this.$refs.popoverTrigger.contains(event.target)) {
          // 点击按钮
          if (this.visible) {
            this.close()
          } else {
            this.open()
          }
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
