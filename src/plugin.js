import Toast from './toast.vue'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      currentToast && currentToast.close()
      currentToast = createToast({ Vue, message, propsData: toastOptions })
    }
  }
}


function createToast({ Vue, message, propsData }) {
  let constructor = Vue.extend(Toast)
  let toast = new constructor({
    propsData
  })
  // slots 赋值要放在mount前面
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
