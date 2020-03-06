<template>
  <div class="m-nav-item" :class="{selected, vertical}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'm-nav-item',
    inject: ['root', 'vertical'],
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selected: false
      }
    },
    created() {
      this.root.addItem(this)
    },
    methods: {
      onClick() {
        this.root.namePath = []
        this.$parent && this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-nav-item {
    padding: 10px 20px;
    position: relative;

    &:not(.vertical) {
      &.selected {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom: 1px solid $blue;
          width: 100%;
        }
      }
    }
    &.vertical {
      &.selected {
        color: $blue;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .m-sub-nav .m-nav-item:not(.vertical) {
    &.selected {
      color: $color;
      background: $grey;

      &::after {
        display: none;
      }
    }
  }
</style>
