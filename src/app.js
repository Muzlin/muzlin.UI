import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'
import Row from './row'
import Col from './col'
Vue.component('mz-button', Button)
Vue.component('mz-icon', Icon)
Vue.component('mz-button-group', ButtonGroup)
Vue.component('mz-input', Input)
Vue.component('mz-row', Row)
Vue.component('mz-col', Col)

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
      console.log(e)
    },
    inputBlur(e) {
      console.log(e)
    }
  }
})
