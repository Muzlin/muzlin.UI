<template>
  <div class="popover" ref="popover">
    <div class="content-wrapper" :class="{[`position-${position}`]:true}" ref="popoverContent" v-if="visible">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="popoverTrigger" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'mz-popover',
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) > -1
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover && this.$refs.popover.addEventListener('click', (event) => {
          // 是否点击的是按钮
          if (this.$refs.popoverTrigger.contains(event.target)) {
            // 点击按钮
            if (this.visible) {
              this.close()
            } else {
              this.open()
            }
          }
        })
      } else {
        this.$refs.popover && this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover && this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    beforeDestroy() {
      if (this.trigger === 'click') {
        this.$refs.popover && this.$refs.popover.removeEventListener('click', this.open)
      } else {
        this.$refs.popover && this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover && this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    computed: {
      openEvent() {
        return this.trigger === 'click' ? 'click' : 'mouseenter'
      },
      closeEvent() {
        return this.trigger === 'click' ? 'click' : 'mouseleave'
      }
    },
    methods: {
      // 定位弹出内容
      positionContent() {
        const { popoverContent, popoverTrigger } = this.$refs
        // 将弹出的popover内容移到body里面
        document.body.appendChild(popoverContent)
        // 获取按钮的位置宽高
        const { width, height, top, left } = popoverTrigger.getBoundingClientRect()
        // 获取弹出层的高度
        const { height: contentHeight } = popoverContent.getBoundingClientRect()
        // 构造位置表
        let positions = {
          top: { left: `${left+window.scrollX}px`, top: `${top+window.scrollY}px` },
          bottom: { left: `${left+window.scrollX}px`, top: `${top+window.scrollY+height}px` },
          left: { left: `${left+window.scrollX}px`, top: `${top+window.scrollY - (contentHeight - height)/2}px` },
          right: { left: `${left+window.scrollX+width}px`, top: `${top+window.scrollY - (contentHeight - height)/2}px` }
        }
        // 将popoverContent的位置改变到按钮上面 tips:获取的高度是相对视窗的高度 所以要加上视窗已经滚动的距离
        popoverContent.style.left = positions[this.position].left
        popoverContent.style.top = positions[this.position].top

      },
      // document监听函数
      onClickDocument(e) {
        // 如果是点击的是按钮或者弹窗就不做操作
        if ((this.$refs.popoverContent && this.$refs.popoverContent.contains(e.target)) || (this.$refs.popoverTrigger &&
            this.$refs.popoverTrigger
            .contains(e.target))) {
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
  @import "var";

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
    max-width: 20em;
    word-break: break-all;
    // 给边框包括伪元素添加的三角形 加上阴影
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, .5));
    // 需要给个白色背景 不然字体也会有阴影
    background: white;

    &::before,
    &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      position: absolute;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before {
        top: 100%;
        border-top-color: $border-color;
        border-bottom: none;
      }

      &::after {
        top: calc(100% - 1px);
        border-top-color: white;
        border-bottom: none;
      }
    }

    &.position-bottom {
      margin-top: 10px;

      &::before {
        bottom: 100%;
        border-bottom-color: $border-color;
        border-top: none;
      }

      &::after {
        bottom: calc(100% - 1px);
        border-bottom-color: white;
        border-top: none;
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before,
      &::after {
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
      }

      &::before {
        left: 100%;
        border-left-color: $border-color;
      }

      &::after {
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }

    &.position-right {
      margin-left: 10px;

      &::before,
      &::after {
        top: 50%;
        transform: translateY(-50%);
        border-left: none;
      }

      &::before {
        right: 100%;
        border-right-color: $border-color;
      }

      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }
  }
</style>
