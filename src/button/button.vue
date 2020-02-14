<template>
  <button class="m-button" :class="{[`icon-${position}`]: true}" @click="$emit('click')">
    <m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
    <m-icon class="icon loading" v-if="loading" name="loading"></m-icon>
    <slot></slot>
  </button>
</template>
<script>
  import Vue from 'vue'
  import Icon from '../icon.vue'
  export default {
    name: "m-button",
    components: {
      'm-icon': Icon
    },
    props: {
      icon: {
        type: String
      },
      position: {
        type: String,
        default: "left",
        // 属性检查器
        validator(value) {
          return value === "left" || value === "right";
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
<style lang="scss" scoped>

  .m-button {
    height: $button-height;
    font-size: $font-size;
    background: $button-bg;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    padding: 0 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle; // inline 元素对齐

    &:hover {
      background: $button-active-bg;
      border: 1px solid $border-color-hover;
    }

    &:focus {
      outline: none;
    }

    &.icon-right {
      >.icon {
        order: 2;
        margin-left: 0.3em;
        margin-right: 0;
      }
    }

    .icon {
      margin-right: 0.3em;
    }

    .loading {
      animation: spin 1.5s infinite linear;
    }
  }
</style>
