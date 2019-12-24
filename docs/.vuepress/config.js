module.exports = {
  title: 'Muzlin UI',
  description: '一个开源的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: '交流', link: '/get-started/' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button'
        ]
      }
    ]
  }
}
