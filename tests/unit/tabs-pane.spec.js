import {expect} from 'chai'
import {mount} from '@vue/test-utils'
import TabsPane from '@/tabs-pane'

describe('TabsPane 组件单元测试', () => {
  it('TabsPane 组件存在', () => {
    expect(TabsPane).to.exist
  })
  describe('props 参数测试', () => {
    it('接受 name', () => {
      const wrapper = mount(TabsPane, {
        propsData: {
          name: 'muzlin'
        }
      })
      expect(wrapper.vm.$props.name).to.eq('muzlin')
    })
  })
})
