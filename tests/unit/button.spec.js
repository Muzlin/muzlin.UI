import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {
  mount
} from '@vue/test-utils'
import Vue from 'vue'
import Button from '../../src/button'
chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

// describe & it 属于mocha 库
// 具体的断言属于 chai.js
describe('Button 组件测试', () => {
  it('Button 组件存在', () => {
    expect(Button).to.exist
  })
  describe('props 参数测试', () => {
    const Constructor = Vue.extend(Button)
    let vm
    it('可以设置 icon', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'settings'
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.attributes('href')).to.equal('#i-settings')
    })
    it('可以设置 loading', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'settings',
          loading: true
        }
      })
      const useElements = wrapper.vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    })
    it('icon 默认的 order 是 0', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: 'settings',
        }
      })
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
  })
  describe('event 事件测试', () => {
    // 挂载组件 得到了包裹器
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    // 通过 `wrapper.vm` 访问实际的 Vue 实例
    const vm = wrapper.vm


    // const Constructor = Vue.extend(Button)
    // let vm
    // it('点击 button 触发 click 事件', () => {
    //   vm = new Constructor({
    //     propsData: {
    //       icon: 'settings',
    //     }
    //   }).$mount()
    //   const callback = sinon.fake()
    //   vm.$on('click', callback)
    //   vm.$el.click()
    //   expect(callback).to.have.been.called
    // })
    // afterEach(() => {
    //   vm.$destroy()
    // })
  })
})
