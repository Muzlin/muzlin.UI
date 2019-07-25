<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    name: 'mz-col',
    props: {
      span: {
        type: [Number, String],
        default: 0
      },
      offset: {
        type: [Number, String]
      },
      pad: {
        type: Object,
        validator
      },
      narrowPc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {
        type: Object,
        validator
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClasses(obj, str = '') {
        let array = []
        obj.span && array.push(`col-${str}${obj.span}`)
        obj.offset && array.push(`offset-${str}${obj.offset}`)
        return array
      }
    },
    computed: {
      colClass() {
        let { span, offset, pad, narrowPc, pc, widePc, createClasses } = this
        return [
          ...createClasses({ span, offset }),
          ...createClasses(pad, 'pad-'),
          ...createClasses(narrowPc, 'narrow-pc-'),
          ...createClasses(pc, 'pc-'),
          ...createClasses(widePc, 'wide-pc-')
        ]
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

  @media (min-width: 577px) {
    @for $n from 1 through 24 {
      &.col-pad-#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-pad-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    @for $n from 1 through 24 {
      &.col-narrow-pc-#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-narrow-pc-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) {
    @for $n from 1 through 24 {
      &.col-pc-#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-pc-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    @for $n from 1 through 24 {
      &.col-wide-pc-#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-wide-pc-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
