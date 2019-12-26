const expect = chai.expect
import Vue from 'vue'
import TabsPane from '../src/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPane 组件单元测试', () => {
  it('TabsPane 组件存在', () => {
    expect(TabsPane).to.exist
  })
  describe('props 参数测试', () => {
    const Constructor = Vue.extend(TabsPane)
    let vm
    it('接受 name', () => {
      vm = new Constructor({
        propsData: {
          name: 'muzlin'
        }
      }).$mount()
      expect(vm.$props.name).to.eq('muzlin')
    })
    afterEach(() => {
      vm.$destroy()
    })
  })
})
