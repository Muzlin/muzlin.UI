<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {
    throws
  } from 'assert'
  export default {
    name: 'mz-tabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    // 依赖注入
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      // 检查子组件 只能为tabs-head 和 tabs-body
      let children = this.$children
      if (children.length === 0) {
        console && console.warn && console.warn('tabs 子组件不能为空')
      } else {
        if (!children.find(child => child.$options.name === 'mz-tabs-head' || child.$options.name === 'mz-tabs-body')) {
          console && console.warn && console.warn('tabs 必须存在 tabs-head 或者 tabs-body 子组件')
        }
      }
      // 找到当前默认选中的tab item元素 进行传递 方便head组件获取item的位置 用来完成切换时完成下方横线的动画效果
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'mz-tabs-head') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'mz-tabs-item' && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
</style>
