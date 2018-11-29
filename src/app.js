import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'
Vue.component('mz-button', Button)
Vue.component('mz-icon', Icon)
Vue.component('mz-button-group', ButtonGroup)
Vue.component('mz-input', Input)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    inputChange(e) {
      console.log(e)
    },
    inputBlur(e){
      console.log(e)
    }
  }
})
