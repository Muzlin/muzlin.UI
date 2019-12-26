<template>
  <div class="demo">
    <mz-button @click="tt">哈哈</mz-button>
  </div>
</template>
<script>
import Button from './button'
export default {
  name: 'demo',
  components: {
    'mz-button': Button
  },
  methods: {
    tt() {
      this.$toast('hha')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
