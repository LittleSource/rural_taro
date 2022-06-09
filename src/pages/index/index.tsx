import { useState,useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtGrid,AtLoadMore } from "taro-ui"
import Taro from '@tarojs/taro'
import SwiperImg from '../../components/swiper-img'
import ArticleCard from '../../components/article-card'
import './index.less'
import request from '../../api/request'
const gridList = [
  {
    image: 'https://cdn.52ym.vip/rural/grid/dangjian.png',
    value: '智慧党建',
    categoryId:'A1000'
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/shijian.png',
    value: '文明实践',
    categoryId:'A1005'
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/fazhi.png',
    value: '法治傅村',
    categoryId:'A1001'
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/sanwu.png',
    value: '三务公开',
    categoryId:'A1088'
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/lishi.png',
    value: '历史沿革',
    categoryId:'A1006'
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/pingyi.png',
    value: '明主评议',
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/zhiyuan.png',
    value: '我是志愿者'
  },
  {
    image: 'https://cdn.52ym.vip/rural/grid/tushu.png',
    value: '图书借阅'
  }
]

const Index = () => {
  const swiperList = [
    'https://cdn.52ym.vip/rural/banner/1.jpeg',
    'https://cdn.52ym.vip/rural/banner/2.jpeg',
  ]

  const [articleList,setArticleList] = useState([])
  const [loading,setLoading] = useState("noMore")
  const [page,setPage] = useState(1)

  useEffect(()=>{
    setPage(1);
    request.getIndexArticleList({
      pageNum: page,
    }).then(res=>{
      if (res.code !=200) {
        Taro.showToast({
          title: res.msg,
          icon: 'none',
          duration: 3000
        })
        return;
      }
      setArticleList(res.data.dateList)
      if (res.data.totalPages == 1) {
        setLoading("noMore")
      }else{
        setLoading("more")
      }
      setPage(page+1);
    })
  },[])

  Taro.useReachBottom(() => {
    if (loading == 'loading' || loading == 'noMore') {
      return;
    }
    setLoading('loading');
    request.getIndexArticleList({
      pageNum: page,
    }).then(res=>{
      if (res.code !=200) {
        Taro.showToast({
          title: res.msg,
          icon: 'none',
          duration: 3000
        })
        return;
      }
      setArticleList(articleList.concat(res.data.dateList))
      if (res.data.totalPages > page) {
        setLoading("more")
      }else{
        setLoading("noMore")
      }
      setPage(page+1);
    })
  })

  const gridClick = (obj)=>{
    if (obj.categoryId !== undefined){
      navTopic(obj.categoryId)
    }else{
      //TODO:
    }
  }

  const navTopic = (categoryId)=>{
    Taro.navigateTo({
      url: '/pages/topic/index?category_id='+categoryId
    })
  }

  return (
    <View className='index'>
      <SwiperImg swiperList={swiperList} />
      <AtGrid data={gridList} hasBorder={false} columnNum={4} onClick={gridClick} />
      {
        articleList.map((item) => {
          return (
            <view style={{marginTop:'10rpx'}}>
             <ArticleCard data={item}></ArticleCard>
            </view>
          )
        })
      }
      <AtLoadMore status={loading}/>
    </View>
  )
}
export default Index;