<template>
  <div class="m-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-nav-item',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    }
  }
}
</script>
<style lang="scss" scoped>
  .m-nav-item{
    &.selected {
      background: red;
    }
  }
</style>
