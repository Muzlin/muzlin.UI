<template>
  <svg class="mz-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  export default {
    name: 'mz-icon',
    created () {
      console.log(this.name)
    },
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
