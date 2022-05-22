export default {
  pages: [
    'pages/index/index',
    'pages/organize/index',
    'pages/mine/index',
    'pages/institution/index',
'pages/article/index',
'pages/topic/index',
],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f8533A',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar:{
    color: '#515151',
    selectedColor: '#f8533A',
    backgroundColor: '#fff',
    borderStyle:'black',
    list:[{
      pagePath:'pages/index/index',
      text:'首页',
      iconPath:'./assets/images/home-smile-2-line.png',
      selectedIconPath:'./assets/images/home-smile-2-fill.png'
    },{
      pagePath:'pages/organize/index',
      text:'组织',
      iconPath:'./assets/images/community-line.png',
      selectedIconPath:'./assets/images/community-fill.png'
    },{
      pagePath:'pages/institution/index',
      text:'制度',
      iconPath:'./assets/images/stack-line.png',
      selectedIconPath:'./assets/images/stack-fill.png'
    },{
      pagePath:'pages/mine/index',
      text:'我的',
      iconPath:'./assets/images/user-5-line.png',
      selectedIconPath:'./assets/images/user-5-fill.png'
    }]
  }
}
