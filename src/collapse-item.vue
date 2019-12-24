<template>
  <div class="collapse-item" @click="open = !open">
    <div class="title">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mz-collapse-item',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  $grey: #ddd;
  $border-radius: 4px;

  .collapse-item {
    >.title {
      border: 1px solid $grey;
      margin: -1px -1px 0 -1px;
      min-height: 32px;
      padding: 0 8px;
      display: flex;
      align-items: center;
    }
    &:first-child{
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child{
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    > .content{
      padding: 8px;
    }
  }
</style>
