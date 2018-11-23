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
