<template>
  <div class="demo">
    <mz-button>哈哈</mz-button>
    <mz-cascader :source="source" popoverHeight="200px"></mz-cascader>
    <p>2321</p>
  </div>
</template>
<script>
import Button from './button'
import Cascader from './cascader'
export default {
  name: 'demo',
  components: {
    'mz-button': Button,
    'mz-cascader': Cascader
  },
  data () {
    return {
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
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  .demo{
    min-height: 100vh;
  }
</style>
