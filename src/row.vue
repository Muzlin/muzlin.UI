<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'mz-row',
    props: {
      gutter: {
        type: [String, Number],
        default: 0
      },
      align: {
        type: String,
        validator: value => ['left', 'right', 'center'].includes(value)
      }
    },
    computed: {
      rowStyle() {
        let { gutter } = this
        return {
          marginLeft: `-${this.gutter/2}px`,
          marginRight: `-${this.gutter/2}px`
        }
      },
      rowClass() {
        let { align } = this
        return [ align && `align-${align}` ]
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        // 将gutter传递给 col
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>
