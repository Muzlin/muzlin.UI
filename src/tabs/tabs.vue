<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'm-tabs',
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
    methods: {
      checkChildren() {
        // 检查子组件 只能为tabs-head 和 tabs-body
        let children = this.$children
        if (children.length === 0) {
          console && console.warn && console.warn('tabs 子组件不能为空')
        } else {
          if (!children.find(child => child.$options.name === 'm-tabs-head' || child.$options.name ===
              'm-tabs-body')) {
            console && console.warn && console.warn('tabs 必须存在 tabs-head 或者 tabs-body 子组件')
          }
        }
      },
      select() {
        // 找到当前默认选中的tab item元素 进行传递 方便head组件获取item的位置 用来完成切换时完成下方横线的动画效果
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'm-tabs-head') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'm-tabs-item' && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren()
      this.select()
    }
  }
</script>
<style lang="scss" scoped>
</style>
