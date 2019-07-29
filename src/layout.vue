<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mz-layout',
    data () {
      return {
        layoutClass: {
          hasSider: false
        }
      }
    },
    mounted () {
      this.$children.forEach(children => {
        if(children.$options.name === 'mz-sider') {
          let { layoutClass } = this
          layoutClass.hasSider = true
        }
      })
    }
  }
</script>


<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>
