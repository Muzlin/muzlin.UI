import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
chai.use(sinonChai)
import TabsItem from '@/tabs/tabs-item'

describe('TabsItem 组件单元测试', () => {
  it('TabsItem 组件存在', () => {
    expect(TabsItem).to.exist
  })
  describe('props 参数测试', () => {
    it('接受 name', () => {
      const wrapper = mount(TabsItem, {
        propsData: {
          name: 'muzlin'
        }
      })
      expect(wrapper.attributes()['data-name']).to.eq('muzlin')
    })
    it('接受 disabled', () => {
      const wrapper = mount(TabsItem, {
        propsData: {
          disabled: true,
          name: 'muzlin'
        }
      })
      // 期待存在disabled的class
      expect(wrapper.classes()).include('disabled')
      // 期待不能被点击
      const callback = sinon.fake()
      wrapper.vm.$on('click', callback)
      wrapper.vm.$el.click()
      // 间谍函数未被执行
      expect(callback).to.have.not.been.called
    })
  })
})
