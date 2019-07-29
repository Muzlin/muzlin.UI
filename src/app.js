import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
Vue.component('mz-button', Button)
Vue.component('mz-icon', Icon)
Vue.component('mz-button-group', ButtonGroup)
Vue.component('mz-input', Input)
Vue.component('mz-row', Row)
Vue.component('mz-col', Col)
Vue.component('mz-layout', Layout)
Vue.component('mz-header', Header)
Vue.component('mz-footer', Footer)
Vue.component('mz-sider', Sider)
Vue.component('mz-content', Content)


new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      inputValue: ''
    }
  },
  methods: {
    inputChange(e) {
			console.log("​inputChange -> e", e)
    },
    inputBlur(e) {
			console.log("​inputBlur -> e", e)
    }
  }
})
