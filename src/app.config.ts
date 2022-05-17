export default {
  pages: [
    'pages/index/index',
    'pages/organize/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle:'black',
    list:[{
      pagePath:'pages/index/index',
      text:'首页',
    },{
      pagePath:'pages/organize/index',
      text:'组织',
    }]
  }
}
