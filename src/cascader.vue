<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">
      <span>{{result}}</span>
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <mz-cascader-items :items="source" :height="popoverHeight" :selected="selected" @update:selected="onUpdateSelected" :loadData="loadData"></mz-cascader-items>
    </div>
  </div>
</template>
<script>
  import CascaderItems from './cascader-items'
  export default {
    name: 'mz-cascader',
    components: {
      'mz-cascader-items': CascaderItems
    },
    props: {
      source: {
        type: Array,
        required: true
      },
      popoverHeight: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      loadData: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        popoverVisible: false
      }
    },
    computed: {
      result() {
        return this.selected && this.selected.map(item => item.name).join('/')
      }
    },
    methods: {
      onClickDocument(e) {
        if(!this.$refs.cascader.contains(e.target)) {
          this.close()
        }
      },
      open() {
        this.popoverVisible = true
        this.$nextTick(() => {
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.popoverVisible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      toggle() {
        if(this.popoverVisible) {
          this.close()
        }else{
          this.open()
        }
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
        // 用户当前选中的项
        let lastItem = newSelected[newSelected.length -1]
        // 处理用户回调
        let updateSource = (result) => {
          let complexSearch = (source) => {
            source.map(item => {
              if(item.id === lastItem.id) {
                result && result.length > 0 && (item.children = result)
              } else {
                // 是否有children
                if(item.children) {
                  complexSearch(item.children)
                }
              }
            })
          }
          let sourceCopy = JSON.parse(JSON.stringify(this.source))
          complexSearch(sourceCopy)
          this.$emit('update:source', sourceCopy)
        }
        if(!lastItem.isLeaf) {
          console.log('22')
          this.loadData(lastItem, updateSource) // 把用户传递的函数执行调用
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .cascader {
    display: inline-block;
    position: relative;
    .trigger {
      border: 1px solid $border-color;
      border-radius: $border-radius;
      height: $input-height;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
    }

    .popover-wrapper {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      background: #fff;
      height: 200px;
      display: flex;
      @extend .box-show;

      .label {
        white-space: nowrap;
      }
    }
  }
</style>
