const expect = chai.expect
import Vue from 'vue'
import TabsBody from '../src/tabs-body'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsBody 组件单元测试', () => {
  it('TabsBody 组件存在', () => {
    expect(TabsBody).to.exist
  })
})
