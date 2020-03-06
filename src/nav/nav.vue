<template>
  <div class="m-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'm-nav',
    provide() {
      return {
        root: this,
        vertical: this.vertical
      }
    },
    props: {
      selected: {
        type: String,
        default: () => ''
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        items: [],
        namePath: []
      }
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      addItem(item) {
        this.items.push(item)
      },
      updateChildren() {
        this.items.forEach(vm => {
          vm.selected = this.selected === vm.name
        })
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('add:selected', (name) => {
            this.$emit('update:selected', name)
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-nav {
    display: flex;
    border-bottom: 1px solid $grey;
    color: $color;
    cursor: default;
    user-select: none;

    &.vertical {
      flex-direction: column;
      border: 1px solid $grey;
    }
  }
</style>
