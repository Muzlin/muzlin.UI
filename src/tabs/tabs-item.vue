<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-tabs-item',
  inject: ['eventBus'],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return { active: this.active, disabled: this.disabled }
    }
  },
  created () {
    this.eventBus && this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    onClick() {
      if(this.disabled) {
        return
      }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      // 单元测试需要 传递一个click
      this.$emit('click', this)
    }
  }
}
</script>
<style lang="scss" scoped>

  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active{
      color: $blue;
      font-weight: bold;
    }
    &.disabled{
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
