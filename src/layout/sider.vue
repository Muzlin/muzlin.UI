<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button class="button" @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'm-sider',
    data() {
      return {
        visible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;

    >.button {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: all .5s;
  }

  .slide-enter,
  .slide-leave-to {
    margin-left: -200px;
  }
</style>
