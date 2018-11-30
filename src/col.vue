<template>
  <div :class="`col-${span}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mz-col',
  props: {
    span: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>
<style lang="scss" scoped>
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
</style>
