const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe & it 属于mocha 库
// 具体的断言属于 chai.js
describe('Button 组件测试', () => {
  it('Button 组件存在', () => {
    expect(Button).to.be.ok
  })
  describe('props 参数测试', () => {
    const Constructor = Vue.extend(Button)
    let vm
    it('可以设置 icon', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    })
    it('可以设置 loading', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          loading: true
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    })
    it('icon 默认的 order 是 0', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: 'settings',
        }
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('0')
      vm.$el.remove()
    })
    it('设置 position 可以改变 order', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          position: 'right'
        }
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
      vm.$el.remove()
    })
    afterEach(() => {
      vm.$destroy()
    })
  })
  describe('event 事件测试', () => {
    const Constructor = Vue.extend(Button)
    let vm
    it('点击 button 触发 click 事件', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings',
        }
      }).$mount()
      const callback = sinon.fake()
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.been.called
    })
    afterEach(() => {
      vm.$destroy()
    })
  })
})
