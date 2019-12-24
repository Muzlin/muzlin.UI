import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
Vue.component('mz-button', Button)
Vue.component('mz-icon', Icon)
Vue.component('mz-button-group', ButtonGroup)
Vue.component('mz-input', Input)
Vue.component('mz-row', Row)
Vue.component('mz-col', Col)
Vue.component('mz-layout', Layout)
Vue.component('mz-header', Header)
Vue.component('mz-footer', Footer)
Vue.component('mz-sider', Sider)
Vue.component('mz-content', Content)
Vue.component('mz-toast', Toast)
Vue.component('mz-tabs', Tabs)
Vue.component('mz-tabs-head', TabsHead)
Vue.component('mz-tabs-item', TabsItem)
Vue.component('mz-tabs-body', TabsBody)
Vue.component('mz-tabs-pane', TabsPane)
Vue.component('mz-popover', Popover)
Vue.component('mz-collapse', Collapse)
Vue.component('mz-collapse-item', CollapseItem)

import plugin from './plugin'
Vue.use(plugin)


new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      inputValue: '',
      selectedTab: ['2', '3']
    }
  },
  mounted() {

  },
  methods: {
    inputChange(e) {
      console.log("​inputChange -> e", e)
    },
    inputBlur(e) {
      console.log("​inputBlur -> e", e)
    },
    alertToast() {
      this.$toast(`hi<b>我是加粗的字体</b>,很多文字很多文字很多文字很多文字-${Math.random()}`, {
        enableHtml: true,
        duration: 2500,
        position: 'middle',
        closeButton: {
          text: '知道啦',
          callBack() {
            console.log('closed')
          }
        }
      })
    }
  }
})
