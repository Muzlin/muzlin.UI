const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
Vue.component('mz-tabs', Tabs)
Vue.component('mz-tabs-head', TabsHead)
Vue.component('mz-tabs-item', TabsItem)
Vue.component('mz-tabs-body', TabsBody)
Vue.component('mz-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs 组件单元测试', () => {
  it('Tabs 组件存在', () => {
    expect(Tabs).to.exist
  })
  describe('props 参数测试', () => {
    it('接受 selected', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <mz-tabs selected="tab1">
          <mz-tabs-head>
            <mz-tabs-item name="tab1">tab1</mz-tabs-item>
            <mz-tabs-item name="tab2">tab2</mz-tabs-item>
          </mz-tabs-head>
          <mz-tabs-body>
            <mz-tabs-pane name="tab1">tab1 text</mz-tabs-pane>
            <mz-tabs-pane name="tab2">tab2 text</mz-tabs-pane>
          </mz-tabs-body>
        </mz-tabs>
      `
      let vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        // 期待被选中的item 为tab1
        expect(vm.$el.querySelector('.active').textContent).to.eq('tab1')
      })
    })
    it('接受 direction', () => {

    })
    afterEach(() => {
      // vm.$destroy()
    })
  })
})
