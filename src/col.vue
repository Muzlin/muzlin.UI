<template>
  <div :class="colClass" :style="colStyle">
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
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let {
          span,
          offset
        } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      colStyle() {
        let {
          gutter
        } = this
        return {
          padding: `0 ${gutter/2}px`
        }
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

  .gutter-box {
    border: 1px solid;
  }
</style>
