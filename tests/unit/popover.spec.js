import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)
import Popover from '@/popover'

describe('Popover 组件单元测试', () => {
  it('Popover 组件存在', () => {
    expect(Popover).to.exist
  })
  describe('props 参数测试', () => {
    it('可以设置 position', () => {
      const wrapper = mount(Popover, {
        slots: {
          default: {template: `<button>点我</button>`},
          content: '<div>弹出内容</div>'
        },
        propsData: {
          position: 'bottom'
        }
      })
      wrapper.find('button').trigger('click')
      const classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
    })
    it('可以设置 trigger', () => {
      const wrapper = mount(Popover, {
        slots: {
          default: {template: `<button>点我</button>`},
          content: '<div>弹出内容</div>'
        },
        propsData: {
          position: 'bottom',
          trigger: 'hover'
        }
      })
      expect(wrapper.find('.content-wrapper').element).to.not.exist
      wrapper.find('.popover').trigger('mouseenter')
      expect(wrapper.find('.content-wrapper').element).to.exist
    })
  })
})
