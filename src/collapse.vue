<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'mz-collapse',
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: String
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
      this.eventBus.$emit('update:selected', this.selected)
      // 监听子元素的通知
      this.eventBus.$on('update:selected', (name) => {
        // 传递到外层
        this.$emit('update:selected', name)
      })
    }
  }
</script>
<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;

  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
    border-bottom: none;
  }
</style>
