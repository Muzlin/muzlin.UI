import Toast from './toast.vue'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      let constructor = Vue.extend(Toast)
      let toast = new constructor({
        propsData: {
          closeButton: toastOptions.closeButton,
          enableHtml: toastOptions.enableHtml,
          duration: toastOptions.duration
        }
      })
      // slots 赋值要放在mount前面
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
