<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="wrapper">
      <div class="message">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <div class="close" ref="text" v-if="closeButton" @click="onClickClose">{{ closeButton.text }}</div>
    </div>
  </div>
</template>

<script>
  import {
    setTimeout
  } from 'timers';
  export default {
    name: 'mz-toast',
    props: {
      duration: {
        type: [String, Number],
        default: 3000
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callBack: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) > -1
        }
      }
    },
    computed: {
      toastClasses() {
        return [this.position]
      }
    },
    mounted() {
      this.updateStyles()
      this.autoClose()
    },
    methods: {
      updateStyles() {
        let { $refs, $nextTick } = this
        // 父元素设置min-height 子元素height:100%不会生效 用js将子元素的高度改为父元素一样的高度
        $nextTick(() => {
          // mounted的时候不能获取高度 用nextTick 在mounted下次队列执行 再去获取
          $refs.line.style.height = `${$refs.toast.getBoundingClientRect().height}px`
          $refs.text.style.height = `${$refs.toast.getBoundingClientRect().height}px`
        })
      },
      autoClose() {
        let {
          duration,
          close
        } = this
        // 显示时间默认3000 0为不自动关闭
        if (parseInt(duration) !== 0) {
          setTimeout(() => {
            close()
          }, duration)
        }
      },
      close() {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onClickClose() {
        this.close()
        this.closeButton && (typeof this.closeButton.callBack === 'function') && this.closeButton.callBack()
      }
    }
  }
</script>


<style lang="scss" scoped>


  @keyframes fade-in-bottom {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }

    100% {
      opacity: 100;
      transform: translateY(0%);
    }
  }
  @keyframes fade-in-top {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }

    100% {
      opacity: 100;
      transform: translateY(0%);
    }
  }
  @keyframes fade-in-middle {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }

  .toast {
    position: fixed;
    left: 50%;

    &.top {
      top: 0;
      transform: translateX(-50%);

      .wrapper {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: fade-in-top $animation-duration;
      }
    }

    &.middle {
      top: 50%;
      transform: translate(-50%, -50%);

      .wrapper {
        animation: fade-in-middle $animation-duration;
      }
    }

    &.bottom {
      bottom: 0;
      transform: translateX(-50%);

      .wrapper {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: fade-in-bottom $animation-duration;
      }

    }
    .wrapper {
      font-size: $font-size;
      min-height: $toast-min-height;
      line-height: 1.8;
      display: flex;
      align-items: center;
      background: $toast-bg;
      border-radius: 4px;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5);
      color: #fff;
      padding: 0 16px;

      .message {
        padding: 4px 0;
      }

      .close {
        padding-left: 16px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .line {
        border-left: 1px solid #666;
        margin-left: 16px;
      }
    }
  }
</style>
