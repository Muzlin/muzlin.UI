let onClickDocument = (e) => {
  let { target } = e
  // 遍历所有添加的组件和函数
  callbacks.forEach(item => {
    // 如果点击的当前组件 当前组件的函数不调用
    if (item.el === target || item.el.contains(target)) {
      return
    }
    // 非当前组件的函数全部调用关闭
    item.callback()
  })
}
document.addEventListener('click', onClickDocument)
let callbacks = []
export default {
  bind: function (el, binding) {
    // 点击的时候 添加当前组件的el&函数
    callbacks.push({
      el,
      callback: binding.value
    })
  }
}

// 移除监听API
let removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}

export {removeListener}
