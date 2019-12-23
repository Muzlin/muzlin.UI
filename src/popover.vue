<template>
  <div class="popover" @click="onClick">
    <div class="content-wrapper" ref="popoverContent" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="popoverTrigger" style="display: inline-block;">
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
        if ((this.$refs.popoverContent && this.$refs.popoverContent.contains(e.target)) || this.$refs.popoverTrigger.contains(e.target)) {
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
  $border-color: #999;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: .5em 1em;
    transform: translateY(-100%);
    margin-top: -10px;
    max-width: 20em;
    word-break: break-all;
    // 给边框包括伪元素添加的三角形 加上阴影
    filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
    // 需要给个白色背景 不然字体也会有阴影
    background: white;
    &::before, &::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
      left: 10px;
    }
    &::before{
      top: 100%;
      border-top-color: $border-color;
    }
    &::after{
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
</style>
