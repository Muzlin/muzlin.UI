import Vue from 'vue'
import Button from './button.vue'

console.log(Button)
Vue.component('mz-button', Button)

new Vue({
  el: '#app'
})
