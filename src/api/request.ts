import api from './index'

const ApiUrl = api.ApiUrl
const apiMember = {
  ApiUrl : ApiUrl,
  BaseUrl : api.BaseUrl,
  // 获取分类
  getCategory: (param) => api.post(ApiUrl +'cmsApi/category', param),
  // 获取组织
  getOrganize: (param = {categoryCode:'A1023'}) => api.post(ApiUrl +'cmsApi/title',param),
  // 获取制度
  getInstitution: (param = {categoryCode:'A1024'}) => api.post(ApiUrl +'cmsApi/title', param),
  // 获取文章列表
  getArticleList: (param) => api.post(ApiUrl +'cmsApi/title', param),
  // 获取文章详情
  getArticleDetail: (param) => api.post(ApiUrl +'cmsApi/content', param),
  // 登录
  login: (param) => api.post(ApiUrl +'cmsApi/login', param),
  // 首页文章标题
  getIndexArticleList: (param) => api.get(ApiUrl +'cmsApi/indexArticle', param),
  // 添加点赞
  addLike: (param) => api.post(ApiUrl +'cmsApi/addLike', param),
  // 添加收藏
  addCollect: (param) => api.post(ApiUrl +'cmsApi/addCollect', param),
  // 添加评论
  addComment: (param) => api.post(ApiUrl +'cmsApi/add_comment', param),
  // 获取我的点赞列表
  getLikeList: (param) => api.get(ApiUrl +'cmsApi/likeList', param),
  // 获取我的收藏列表
  getCollectList: (param) => api.get(ApiUrl +'cmsApi/collectList', param),
}
export default apiMember