<template>
  <button class="mz-button" :class="{[`icon-${position}`]: true}" @click="$emit('click')">
    <mz-icon class="icon" v-if="icon && !loading" :name="icon"></mz-icon>
    <mz-icon class="icon loading" v-if="loading" name="loading"></mz-icon>
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
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes spin {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
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

    .loading {
      animation: spin 1.5s infinite linear;
    }
  }
</style>
