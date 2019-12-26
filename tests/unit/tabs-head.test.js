const expect = chai.expect
import Vue from 'vue'
import TabsHead from '../src/tabs-head'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsHead 组件单元测试', () => {
  it('TabsHead 组件存在', () => {
    expect(TabsHead).to.exist
  })
})
