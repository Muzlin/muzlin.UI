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
      phone: {
        type: Object,
        validator
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
    computed: {
      colClass() {
        let { span, offset, phone, pad, narrowPc, pc, widePc } = this
        return [span && `col-${span}`, offset && `offset-${offset}`,
          ...(phone && [`col-phone-${phone.span}`] || []),
          ...(pad && [`col-pad-${pad.span}`] || []),
          ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`] || []),
          ...(pc && [`col-pc-${pc.span}`] || []),
          ...(widePc && [`col-widePc-${widePc.span}`] || [])
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

  @media (max-width: 576px) {
    @for $n from 1 through 24 {
      &.col-phone-#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    @for $n from 1 through 24 {
      &.offset-phone-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
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

  @media (min-width: 769px) and (max-width: 992px) {
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

  @media (min-width: 993px) and (max-width: 1200px) {
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
