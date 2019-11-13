const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../src/tabs-item'
Vue.component('mz-tabs-item', TabsItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem 组件单元测试', () => {
  it('TabsItem 组件存在', () => {
    expect(TabsItem).to.exist
  })
  describe('props 参数测试', () => {
    const Constructor = Vue.extend(TabsItem)
    let vm
    it('接受 name', () => {
      vm = new Constructor({
        propsData: {
          name: 'muzlin'
        }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('muzlin')
    })
    it('接受 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      // 期待存在disabled的class
      expect(vm.$el.classList.contains('disabled')).to.eq(true)
      // 期待不能被点击
      const callback = sinon.fake()
      vm.$on('click', callback)
      vm.$el.click()
      // 间谍函数未被执行
      expect(callback).to.have.not.been.called
    })
    afterEach(() => {
      vm.$destroy()
    })
  })
})
