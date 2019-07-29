const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col 组件单元测试', () => {
  it('Col 组件存在', () => {
    expect(Col).to.be.ok
  })
  describe('props 参数测试', () => {
    const Constructor = Vue.extend(Col)
    let vm
    it('接收 span 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      vm = new Constructor({
        propsData: {
          span: '10'
        }
      }).$mount('div')
      const element = vm.$el
      expect(element.classList.contains('col-10')).to.eq(true)
      div.remove()
    })
    it('接收 offset 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      vm = new Constructor({
        propsData: {
          offset: '10'
        }
      }).$mount('div')
      const element = vm.$el
      expect(element.classList.contains('offset-10')).to.eq(true)
      div.remove()
    })
    it('接收 pad 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      vm = new Constructor({
        propsData: {
          pad: {span: 10, offset: 1}
        }
      }).$mount('div')
      const element = vm.$el
      expect(element.classList.contains('offset-pad-1')).to.eq(true)
      expect(element.classList.contains('col-pad-10')).to.eq(true)
      div.remove()
    })
    it('接收 narrowPc 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      vm = new Constructor({
        propsData: {
          narrowPc: {span: 10, offset: 1}
        }
      }).$mount('div')
      const element = vm.$el
      expect(element.classList.contains('offset-narrow-pc-1')).to.eq(true)
      expect(element.classList.contains('col-narrow-pc-10')).to.eq(true)
      div.remove()
    })
    it('接收 pc 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      vm = new Constructor({
        propsData: {
          pc: {span: 10, offset: 1}
        }
      }).$mount('div')
      const element = vm.$el
      expect(element.classList.contains('offset-pc-1')).to.eq(true)
      expect(element.classList.contains('col-pc-10')).to.eq(true)
      div.remove()
    })
    it('接收 widePc 属性', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Col)
      vm = new Constructor({
        propsData: {
          widePc: {span: 10, offset: 1}
        }
      }).$mount('div')
      const element = vm.$el
      expect(element.classList.contains('offset-wide-pc-1')).to.eq(true)
      expect(element.classList.contains('col-wide-pc-10')).to.eq(true)
      div.remove()
    })
    afterEach(() => {
      vm.$destroy()
    })
  })
})
