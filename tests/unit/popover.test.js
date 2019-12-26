const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe & it 属于mocha 库
// 具体的断言属于 chai.js
describe('Popover 组件单元测试', () => {
  it('Popover 组件存在', () => {
    expect(Popover).to.exist
  })
  describe('props 参数测试', () => {
    const Constructor = Vue.extend(Popover)
    let vm
    it('可以设置 position', (done) => {
      Vue.component('mz-popover', Popover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <mz-popover position="bottom" ref="p">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </mz-popover>
      `
      vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
          const {popoverContent} = vm.$refs.p.$refs
          expect(popoverContent.classList.contains('position-bottom')).to.be.true
          done()
        })
      })
    })
    xit('可以设置 trigger', (done) => {
      Vue.component('mz-popover', Popover)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
      <mz-popover position="bottom" ref="p" trigger="hover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </mz-popover>
      `
      vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        let event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
          console.log(vm.$refs.p.$refs)
          const {popoverContent} = vm.$refs.p.$refs
          console.log(popoverContent)
          // expect(popoverContent.classList.contains('position-bottom')).to.be.true
          done()
        })
      })
    })

    afterEach(() => {
      vm.$destroy()
    })
  })
  // describe('event 事件测试', () => {
  //   const Constructor = Vue.extend(Button)
  //   let vm
  //   it('点击 button 触发 click 事件', () => {
  //     vm = new Constructor({
  //       propsData: {
  //         icon: 'settings',
  //       }
  //     }).$mount()
  //     const callback = sinon.fake()
  //     vm.$on('click', callback)
  //     vm.$el.click()
  //     expect(callback).to.have.been.called
  //   })
  //   afterEach(() => {
  //     vm.$destroy()
  //   })
  // })
})
