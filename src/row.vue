<template>
  <div class="row" :style="rowStyle">
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
      }
    },
    computed: {
      rowStyle(){
        let { gutter } = this
        return {marginLeft: `-${this.gutter/2}px`, marginRight: `-${this.gutter/2}px`}
      }
    },
    mounted(){
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

  }
</style>
