<template>
  <div class="cascader-items" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="item, index in items" :key="index" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <div class="icons">
          <template v-if="loadingItem.name === item.name">
            <mz-icon class="loading" name="loading"></mz-icon>
          </template>
          <template v-else>
            <mz-icon class="next" v-if="rightArrowVisible(item)" name="right"></mz-icon>
          </template>
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <mz-cascader-items :items="rightItems" :height="height" :selected="selected" @update:selected="onUpdateSelected"
        :level="level + 1" :loadData="loadData" :loadingItem="loadingItem"></mz-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from './icon'
  export default {
    name: 'mz-cascader-items',
    components: {
      'mz-icon': Icon
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      },
      selected: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      },
      loadData: {
        type: Function
      },
      loadingItem: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      rightItems() {
        let item = this.items.filter(i => i.name === (this.selected[this.level] && this.selected[this.level].name))[0]
        return item && item.children || null
      }
    },
    methods: {
      onClickLabel(item) {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        // 新选中 删除后面的所有值 防止数据残留
        selectedCopy.splice(this.level)
        // 更新选中的值
        selectedCopy[this.level] = item
        this.$emit('update:selected', selectedCopy)
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      },
      rightArrowVisible(item) {
        return this.loadData ? !item.isLeaf : item.children
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "var";

  .cascader-items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;

    .left {
      height: 100%;
      // padding: .3em 0;
      overflow: auto;
    }

    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }

    .label {
      cursor: pointer;
      padding: .3em 1em;
      display: flex;
      align-items: center;
      white-space: nowrap;

      &:hover {
        background: $grey;
      }

      .name {
        margin-right: 1em;
        user-select: none;
      }

      .icons {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .mz-icon {
          &.next {
            transform: scale(.7);
          }

          &.loading {
            animation: spin 1.5s infinite linear;
          }
        }
      }
    }
  }
</style>
