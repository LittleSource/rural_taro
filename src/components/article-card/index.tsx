import React from 'react'
import { View, Image } from '@tarojs/components'
import './index.less'
import "taro-ui/dist/style/components/flex.scss";
export default function ArticleCard() {
  return (
    <View className='card-box'>
      <view className='at-row'>
        <view className='content'>
          <view className='content-text'>
            一款基于Taro 框架开发的多端UI 组件库. Contribute to NervJS/taro-ui development by creating an account on GitHub.
          </view>
          <view className='footer'>
            发布于2020-01-022 13:09:09
          </view>
        </view>
        <Image className='card-img' src='https://cdn.uviewui.com/uview/swiper/swiper1.png'></Image>
      </view>
    </View>
  )
}
