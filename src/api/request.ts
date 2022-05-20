import api from './index'

const ApiUrl = api.ApiUrl
const apiMember = {
  ApiUrl : ApiUrl,
  BaseUrl : api.BaseUrl,
  // 获取分类
  getCategory: (param) => api.requestJson(ApiUrl +'cmsApi/category', param),
  // 获取组织
  getOrganize: (param = {categoryCode:'A1023'}) => api.requestJson(ApiUrl +'cmsApi/title',param),
  // 获取制度
  getInstitution: (param = {categoryCode:'A1024'}) => api.requestJson(ApiUrl +'cmsApi/title', param),
}
export default apiMember