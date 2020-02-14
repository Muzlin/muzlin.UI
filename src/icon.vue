<template>
  <svg class="m-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name: 'm-icon',
    props: {
      name: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-icon {
    height: 1em;
    width: 1em
  }
</style>
