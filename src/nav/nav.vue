<template>
  <div class="m-nav">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'm-nav',
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    computed: {
      items() {
        return this.$children.filter(vm => vm.$options.name === 'm-nav-item')
      }
    },
    methods: {
      updateChildren() {
        this.items.forEach(vm => {
          vm.selected = this.selected.indexOf(vm.name) > -1
        })
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('add:selected', (name) => {
            if (this.multiple) {
              if (!this.selected.includes(name)) {
                let copySelected = JSON.parse(JSON.stringify(this.selected))
                copySelected.push(name)
                this.$emit('update:selected', copySelected)
              }
            } else {
              this.$emit('update:selected', [name])
            }
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .m-nav {
    border: 1px solid;
    display: flex;
  }
</style>
