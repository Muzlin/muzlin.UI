import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
Vue.component('mz-button', Button)
Vue.component('mz-icon', Icon)
Vue.component('mz-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data(){
    return {
      loading: false
    }
  }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect
{
  // vue构造器构造一个函数
  const Constructor = Vue.extend(Button)
  // 实例化button (可以直接使用 $mount)
  const mzButton = new Constructor({
    propsData: {
      icon: 'up'
    }
  }).$mount()
  let useElement = mzButton.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-up')
  mzButton.$el.remove()
  mzButton.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  // vue构造器构造一个函数
  const Constructor = Vue.extend(Button)
  // 实例化button (可以直接使用 $mount)
  const mzButton = new Constructor({
    propsData: {
      icon: 'up'
    }
  }).$mount(div)
  let svg = mzButton.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('0')
  mzButton.$el.remove()
  mzButton.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  // vue构造器构造一个函数
  const Constructor = Vue.extend(Button)
  // 实例化button (可以直接使用 $mount)
  const mzButton = new Constructor({
    propsData: {
      icon: 'up',
      position: 'right'
    }
  }).$mount(div)
  let svg = mzButton.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  mzButton.$el.remove()
  mzButton.$destroy()
}
{
  // vue构造器构造一个函数
  const Constructor = Vue.extend(Button)
  // 实例化button (可以直接使用 $mount)
  const mzButton = new Constructor({
    propsData: {
      icon: 'good'
    }
  }).$mount()
  mzButton.$on('click', function(){
    expect(1).to.eq(1)
  })
  let button = mzButton.$el
  button.click()
  mzButton.$el.remove()
  mzButton.$destroy()
}
