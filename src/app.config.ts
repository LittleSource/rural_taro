export default {
  pages: [
    'pages/index/index',
    'pages/organize/index',
    'pages/mine/index',
    'pages/institution/index',
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
      iconPath:'./static/images/home-smile-2-line.png',
      selectedIconPath:'./static/images/home-smile-2-fill.png'
    },{
      pagePath:'pages/organize/index',
      text:'组织',
      iconPath:'./static/images/community-line.png',
      selectedIconPath:'./static/images/community-fill.png'
    },{
      pagePath:'pages/institution/index',
      text:'制度',
      iconPath:'./static/images/stack-line.png',
      selectedIconPath:'./static/images/stack-fill.png'
    },{
      pagePath:'pages/mine/index',
      text:'我的',
      iconPath:'./static/images/user-5-line.png',
      selectedIconPath:'./static/images/user-5-fill.png'
    }]
  }
}
