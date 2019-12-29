import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)
import Col from '@/col'

describe('Col 组件单元测试', () => {
  it('Col 组件存在', () => {
    expect(Col).to.exist
  })
  describe('props 参数测试', () => {
    const wrapper = mount(Col, {
      propsData: {
        span: '10',
        offset: '10',
        pad: {span: 10, offset: 1},
        narrowPc: {span: 10, offset: 1},
        pc: {span: 10, offset: 1},
        widePc: {span: 10, offset: 1}
      }
    })
    const classes = wrapper.classes()
    it('接收 span 属性', () => {
      expect(classes).to.include('col-10')
    })
    it('接收 offset 属性', () => {
      expect(classes).to.include('offset-10')
    })
    it('接收 pad 属性', () => {
      expect(classes).to.include('offset-pad-1')
      expect(classes).to.include('col-pad-10')
    })
    it('接收 narrowPc 属性', () => {
      expect(classes).to.include('offset-narrow-pc-1')
      expect(classes).to.include('col-narrow-pc-10')
    })
    it('接收 pc 属性', () => {
      expect(classes).to.include('offset-pc-1')
      expect(classes).to.include('col-pc-10')
    })
    it('接收 widePc 属性', () => {
      expect(classes).to.include('offset-wide-pc-1')
      expect(classes).to.include('col-wide-pc-10')
    })
  })
})
