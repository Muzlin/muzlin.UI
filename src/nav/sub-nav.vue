<template>
  <div class="m-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="m-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'm-sub-nav',
    data() {
      return {
        open: false
      }
    },
    methods: {
      onClick() {
        this.open = !this.open
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-sub-nav {
    position: relative;

    >span {
      padding: 10px 20px;
      display: block;
    }

    &-popover {
      font-size: $font-size;
      background: #fff;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      margin-top: 4px;
      box-shadow: 0 0 3px fade-out($color: #000000, $amount: 0.8);
      min-width: 8em;
    }
  }

  .m-sub-nav .m-sub-nav {
    .m-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 4px;
    }
  }
</style>
