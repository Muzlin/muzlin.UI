import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
chai.use(sinonChai)
import Row from '@/grid/row'
import Col from '@/grid/col'

describe('Row 组件单元测试', () => {
  it('Row 组件存在', () => {
    expect(Row).to.exist
  })
  xit('接收 gutter 属性', (done) => {
    // Vue.component('m-row', Row)
    // Vue.component('m-col', Col)
    // const div = document.createElement('div')
    // document.body.appendChild(div)
    // div.innerHTML = `
    //   <m-row gutter="20">
    //     <m-col span="10"></m-col>
    //     <m-col span="12"></m-col>
    //   </m-row>
    // `
    // const vm = new Vue({
    //   el: div
    // })
    const wrapper = mount(Row, {
      slots: {
        default: [Col, Col]
      },
      propsData: {
        gutter: '20'
      }
    })

    console.log(wrapper.html())

    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).margin).to.eq('0px -10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })
  xit('接收 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'center'
      }
    }).$mount('div')
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('center')
    div.remove()
    vm.$destroy()
  })
})
