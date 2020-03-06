<template>
  <div class="m-sub-nav" :class="{active}" v-click-outside="close">
    <span class="m-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="m-sub-nav-icon" :class="{open}">
        <m-icon name="right"></m-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
        <div class="m-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="m-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script>
  import ClickOutside from '../click-outside'
  import MIcon from '@/icon'
  export default {
    components: {
      MIcon
    },
    name: 'm-sub-nav',
    inject: ['root', 'vertical'],
    directives: {
      ClickOutside
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      active() {
        return this.root.namePath.indexOf(this.name) > -1
      }
    },
    methods: {
      enter(el, done) {
        const {
          height
        } = el.getBoundingClientRect()
        el.style.height = 0
        el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.addEventListener('transitionend', () => {
          done()
        })
      },
      afterEnter(el) {
        el.style.height = 'auto'
      },
      leave(el, done) {
        const {
          height
        } = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect()
        el.style.height = 0
        el.addEventListener('transitionend', () => {
          done()
        })
      },
      afterLeave(el) {
        el.style.height = 'auto'
      },
      close() {
        this.open = false
      },
      onClick() {
        this.open = !this.open
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {}
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-sub-nav {
    position: relative;

    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border: 1px solid $blue;
        width: 100%;
      }
    }

    &-label {
      padding: 10px 20px;
      display: block;
    }

    &-icon {
      display: none;
    }

    &-popover {
      font-size: $font-size;
      color: $color-light;
      background: #fff;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      margin-top: 4px;
      box-shadow: 0 0 3px fade-out($color: #000000, $amount: 0.8);
      min-width: 8em;

      &.vertical {
        position: static;
        border-radius: 0;
        border: none;
        box-shadow: none;
        transition: all .3s;
        overflow: hidden;
      }
    }
  }

  .m-sub-nav .m-sub-nav {
    &.active {
      &::after {
        display: none;
      }
    }

    .m-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 4px;
    }

    .m-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .m-sub-nav-icon {
      display: inline-flex;
      margin-left: 1em;
      transition: all .7s;

      svg {
        fill: $color-light;
      }

      &.open {
        transform: rotate(180deg)
      }
    }
  }
</style>
