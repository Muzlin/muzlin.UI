<template>
  <svg class="mz-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name: 'mz-icon',
    props: {
      name: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mz-icon {
    height: 1em;
    width: 1em
  }
</style>
