<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'm-collapse',
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      // 通知初始默认选中
      this.eventBus.$emit('update:selected', this.selected)
      // 监听子元素的通知
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if(this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        // 传递到外层
        this.$emit('update:selected', selectedCopy)
        // 通知子组件
        this.eventBus.$emit('update:selected', selectedCopy)
      })
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        // 传递到外层
        this.$emit('update:selected', selectedCopy)
        // 通知子组件
        this.eventBus.$emit('update:selected', selectedCopy)
      })
    }
  }
</script>
<style lang="scss" scoped>


  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
    border-bottom: none;
  }
</style>
