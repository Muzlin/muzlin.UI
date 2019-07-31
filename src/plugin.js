import Toast from './toast.vue'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      currentToast && currentToast.close()
      currentToast = createToast({ Vue, message, propsData: toastOptions, onClose: () => {
        // 关闭时回调事件  将currentToast 设为null 防止重复调用关闭
        currentToast = null
      } })
    }
  }
}


function createToast({ Vue, message, propsData, onClose }) {
  let constructor = Vue.extend(Toast)
  let toast = new constructor({
    propsData
  })
  // slots 赋值要放在mount前面
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
