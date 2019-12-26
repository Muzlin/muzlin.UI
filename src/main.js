import Vue from 'vue'
import Demo from './demo'
import plugin from './plugin'
Vue.use(plugin)



Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')
