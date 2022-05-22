import { useState,useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtGrid } from "taro-ui"
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
  useEffect(()=>{
    
  },[])
  const swiperList = [
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
  ]

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
        gridList.map((item,index) => {
          return (
            <view style={{marginTop:'10rpx'}}>
             
            </view>
          )
        })
      }
    </View>
  )
}
export default Index;