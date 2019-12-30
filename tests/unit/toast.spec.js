import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
chai.use(sinonChai)
import Toast from '@/toast'

describe('Toast 组件单元测试', () => {
  it('Toast 组件存在', () => {
    expect(Toast).to.exist
  })
  describe('props 参数测试', function () {
    // 解除mocha 的2000ms测试限制
    this.timeout(10000)
    it('接受 duration', (done) => {
      const wrapper = mount(Toast, {
        propsData: {
          duration: 1000
        }
      })
      // 期待正确接收值
      expect(wrapper.vm.$options.propsData.duration).to.eq(1000)
      // 期待 1000 ms后自动关闭
      setTimeout(() => {
        expect(document.body.contains(wrapper.vm.$el)).to.eq(false)
        done()
      }, 1500)
    })
    xit('接受 closeButton', () => {
      // 创建一个间谍函数 用于测试button 的回调
      const callBack = sinon.fake()
      const wrapper = mount(Toast, {
        propsData: {
          closeButton: {
            text: '知道啦',
            callBack
          }
        }
      })
      // 期待文字正确
      let closeButton = wrapper.vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim('')).to.eq('知道啦')
      // 期待 closeButton点击后 callback被调用
      closeButton.click()
      expect(callBack).to.have.been.called
    })
    xit('接受 enableHtml', () => {
      const wrapper = mount(Toast, {
        slots: {
          default: '<span>hi muzlin</span>'
        },
        propsData: {
          enableHtml: true
        }
      })
      let span = wrapper.vm.$el.querySelector('span')
      expect(span).to.exist
    })
    it('接受 position', () => {
      const wrapper = mount(Toast, {
        propsData: {
          position: 'bottom'
        }
      })
      expect(wrapper.classes()).include('bottom')
    })
  })
})
