import Taro from '@tarojs/taro'

// 测试
let BaseUrl = 'http://119.3.219.157:8980'
let ApiUrl = BaseUrl + '/js/f/'
let imgUrl = 'http://192.168.1.8:8084'

function callRequest(url: string, data: object,method = "GET") {
    Taro.showLoading({
        title: '加载中',
        mask: true
    })
    return new Promise(function (resolve, reject) {
        Taro.request({
            url: url,
            method: method,
            data: data,
            header: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            success: function (res) {
                Taro.hideLoading();
                if (res.statusCode === 200) {
                    if (res.data.code === 1090) {
                        Taro.navigateTo({
                            url: '../login/index'
                        })
                    } else {
                        resolve(res.data);
                    }
                } else {
                    reject(res.errMsg);
                }
            },
            fail: function (err) {
                Taro.hideLoading();
                reject(err)
                showErrorToast(err)
                // console.log('请求失败，url', url);
                // console.log('请求参数，data:', data);
            }
        })
    });
}


function post(url: string, data: object) {
    return callRequest(url,data,"POST")
}

function get(url: string, data: object) {
    return callRequest(url,data,"GET")
}

function showErrorToast(msg) {
    Taro.showToast({
        title: msg,
        icon: 'none'
    })
}

const api = {
    post,
    get,
    showErrorToast,
    ApiUrl,
    BaseUrl
}

export default api