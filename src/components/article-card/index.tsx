import React from 'react'
import { View, Image } from '@tarojs/components'
import './index.less'
import "taro-ui/dist/style/components/flex.scss";
import Taro from '@tarojs/taro';
export default function ArticleCard(props) {
  const navPage = () => {
    Taro.navigateTo({
      url: '/pages/article/index?id=' + props.data.id
    })
  }
  return (
    <View className='card-box' onClick={navPage}>
      <view className='at-row'>
        <view className='content'>
          <view className='content-text'>
            {props.data.title}
          </view>
          <view className='footer'>
            发布于{props.data.createDate}
          </view>
        </view>
        <Image className='card-img' src={props.data.image}></Image>
      </view>
    </View>
  )
}
