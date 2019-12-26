const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast 组件单元测试', () => {
  it('Toast 组件存在', () => {
    expect(Toast).to.exist
  })
  describe('props 参数测试', function () {
    // 解除mocha 的2000ms测试限制
    this.timeout(10000)
    const Constructor = Vue.extend(Toast)
    let vm
    it('接受 duration', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          duration: 1000
        }
      }).$mount(div)
      // 期待正确接收值
      expect(vm.$options.propsData.duration).to.eq(1000)
      // 期待 1000 ms后自动关闭
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })
    it('接受 closeButton', () => {
      // 创建一个间谍函数 用于测试button 的回调
      const callBack = sinon.fake()
      let div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: '知道啦',
            callBack
          }
        }
      }).$mount(div)
      // 期待文字正确
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim('')).to.eq('知道啦')
      // 期待 closeButton点击后 callback被调用
      closeButton.click()
      expect(callBack).to.have.been.called
    })
    it('接受 enableHtml', () => {
      vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ['<span>hi muzlin</span>']
      vm.$mount()
      let span = vm.$el.querySelector('span')
      expect(span).to.exist
    })
    it('接受 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('bottom')).to.eq(true)
    })
    afterEach(() => {
      vm.$destroy()
    })
  })
})
