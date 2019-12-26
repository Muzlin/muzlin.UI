<template>
  <div class="cascader-item">
    {{sourceItem && sourceItem.name}}
    <mz-cascader-item v-if="sourceItem.children" v-for="(item, index) in sourceItem.children" :key="index"
      :sourceItem="item"></mz-cascader-item>
  </div>
</template>
<script>
  export default {
    name: 'mz-cascader-item',
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cascader-item {
    border: 1px solid red;
    margin: 10px;
  }
</style>
