<template>
  <div class="demo">
    <mz-button>哈哈</mz-button>
    <mz-cascader popoverHeight="200px" :selected.sync="selected" :source.sync="source"></mz-cascader>
    <p>2321</p>
  </div>
</template>
<script>
  import Button from './button'
  import Cascader from './cascader'
  import db from './db'

  function ajax(parentId = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = db.filter(item => item.parent_id === parentId)
        result.map(node => {
          node.isLeaf = !db.filter(item => item.parent_id === node.id).length > 0
        })
        resolve(result)
      }, 0)
    })
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
        source: [{
        name: '四川',
        children: [
          { name: '成都', children: [
            { name: '高新区' },
            { name: '武侯区' }
          ] },
          { name: '广安', children: [
            { name: '广安区' },
            { name: '华蓥市' }
          ] },
          { name: '攀枝花', children: [
            { name: '仁和' },
            { name: '东区' }
          ] }
        ]
      }, {
        name: '浙江',
        children: [
          { name: '杭州', children: [
            { name: '嘉欣' },
            { name: '南部' }
          ]  },
          { name: '上城', children: [
            { name: '嘉禾区' },
            { name: '南阳区' }
          ]  }
        ]
      }, {
        name: '云南',
        children: [
          { name: '昆明', children: [
            { name: '北部区' },
            { name: '高新区' }
          ]  },
          { name: '西昌', children: [
            { name: '西昌南' },
            { name: '西昌北' }
          ]  },
          { name: '楚雄', children: [
            { name: '安平区' },
            { name: '北疆区' }
          ]  }
        ]
      }]
      }
    },
    created() {
      // ajax().then(result => {
      //   this.source = result
      // })
    },
    methods: {
      loadData(node, callback) {
        let {name, id, parent_id} = node
        ajax(id).then(result => {
          callback(result)
        })
      }
    }
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
