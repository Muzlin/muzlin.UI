<template>
  <div :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{marginLeft: `${gutter/2}px`, marginRight: `${gutter/2}px`}">
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
    },
    offset: {
      type: [Number, String]
    }
  },
  data(){
    return {
      gutter: 0
    }
  }
}
</script>
<style lang="scss" scoped>
  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
</style>
