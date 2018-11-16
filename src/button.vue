<template>
  <button class="mz-button" :class="{[`icon-${position}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'mz-button',
    props: {
      icon: {
        type: String
      },
      position: {
        type: String,
        default: 'left',
        // 属性检查器
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mz-button {
    height: var(--button-height);
    font-size: var(--font-size);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    padding: 0 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle; // inline 元素对齐

    &:hover {
      background: var(--button-bg-active);
      border: 1px solid var(--border-color-hover);
    }

    &:focus {
      outline: none;
    }

    &.icon-right {
      >.icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
    }

    .icon {
      margin-right: .3em;
    }
  }
</style>
