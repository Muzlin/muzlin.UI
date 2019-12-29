import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)
import Input from '@/input'

describe('Input 组件单元测试', () => {
  it('Input 组件存在', () => {
    expect(Input).to.exist
  })
  describe('props 参数测试', () => {
    const wrapper = mount(Input, {
      propsData: {
        value: '张三',
        disabled: true,
        readonly: true,
        error: 'error message'
      }
    })
    const el = wrapper.vm.$el
    it('可以设置value', () => {
      const inputElement = el.querySelector('input')
      expect(inputElement.value).to.eq('张三')
    })
    it('可以设置disabled', () => {
      const inputElement = el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
    })
    it('可以设置readonly', () => {
      const inputElement = el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
    })
    it('可以设置error', () => {
      const useElement = el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
      const errorMessage = el.querySelector('.errorMessage')
      expect(errorMessage.innerHTML).to.eq('error message')
    })
  })
  describe('event 事件测试', () => {
    // let vm = {}
    // const callback = sinon.fake()
    // let event
    // afterEach(() => {
    //   // 给target 上添加一个value
    //   Object.defineProperty(
    //     event, 'target', { value: { value: 'hi' }, enumerable: true}
    //   )
    //   let inputElement = vm.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    //   // 期待回调函数被调用 并且传出value
    //   expect(callback).to.have.calledWith('hi')
    // })
    // it('支持change事件', () => {
    //   vm.$on('change', callback)
    //   // 触发input的 change事件
    //   event = new Event('change')
    // })
    // it('支持input事件', () => {
    //   vm.$on('input', callback)
    //   // 触发input的 input事件
    //   event = new Event('input')
    // })
    // it('支持focus事件', () => {
    //   vm.$on('focus', callback)
    //   // 触发input的 focus事件
    //   event = new Event('focus')
    // })
    // it('支持blur事件', () => {
    //   vm.$on('blur', callback)
    //   // 触发input的 blur事件
    //   event = new Event('blur')
    // })
  })
})
