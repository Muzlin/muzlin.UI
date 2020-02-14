import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)
import Vue from 'vue'
import Tabs from '@/tabs/tabs'
import TabsHead from '@/tabs/tabs-head'
import TabsItem from '@/tabs/tabs-item'
import TabsBody from '@/tabs/tabs-body'
import TabsPane from '@/tabs/tabs-pane'
Vue.component('m-tabs', Tabs)
Vue.component('m-tabs-head', TabsHead)
Vue.component('m-tabs-item', TabsItem)
Vue.component('m-tabs-body', TabsBody)
Vue.component('m-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs 组件单元测试', () => {
  xit('Tabs 组件存在', () => {
    expect(Tabs).to.exist
  })
  describe('props 参数测试', () => {
    xit('接受 selected', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <m-tabs selected="tab1">
          <m-tabs-head>
            <m-tabs-item name="tab1">tab1</m-tabs-item>
            <m-tabs-item name="tab2">tab2</m-tabs-item>
          </m-tabs-head>
          <m-tabs-body>
            <m-tabs-pane name="tab1">tab1 text</m-tabs-pane>
            <m-tabs-pane name="tab2">tab2 text</m-tabs-pane>
          </m-tabs-body>
        </m-tabs>
      `
      let vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        // 期待被选中的item 为tab1
        expect(vm.$el.querySelector('.active').textContent).to.eq('tab1')
      })
    })
    xit('接受 direction', () => {

    })
    afterEach(() => {
      // vm.$destroy()
    })
  })
})
