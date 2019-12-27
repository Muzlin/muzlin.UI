<template>
  <div class="demo">
    <mz-button>哈哈</mz-button>
    <mz-cascader :source="source" popoverHeight="200px" :selected.sync="selected"></mz-cascader>
    <p>2321</p>
  </div>
</template>
<script>
  import Button from './button'
  import Cascader from './cascader'
  import db from './db'
  function ajax(parentId = 0) {
      return db.filter(item => item.parent_id === parentId)
  }
  export default {
    name: 'demo',
    components: {
      'mz-button': Button,
      'mz-cascader': Cascader
    },
    data() {
      return {
        selected: [],
        source: ajax(),
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .demo {
    min-height: 100vh;
  }
</style>
