<template>
  <div class="demo">

  </div>
</template>
<script>
  import MButton from './button/button'
  import MNav from './nav/nav'
  import MNavItem from './nav/nav-item'
  import MSubNav from './nav/sub-nav'
  export default {
    name: 'demo',
    components: {
      MButton,
      MNav,
      MNavItem,
      MSubNav
    },
    data() {
      return {
        selected: '2'
      }
    }
  }
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .demo {
    // min-height: 100vh;
    padding: 100px;

    .box {
      width: 100%;
      height: 350px;
      background: #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
    }
  }
</style>
