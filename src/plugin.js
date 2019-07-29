import Toast from './toast.vue'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      let constructor = Vue.extend(Toast)
      let toast = new constructor()
      // slot 赋值要放在mount前面
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
