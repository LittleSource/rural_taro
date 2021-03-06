import React from 'react'
import { View, Image } from '@tarojs/components'
import { browHistoryModel } from '../../models/browHistory';
import './index.less'
import "taro-ui/dist/style/components/flex.scss";
import Taro from '@tarojs/taro';
import request from '../../api/request';
export default function ArticleCard(props) {
  const navPage = () => {
    browHistoryModel.add(props.data)
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
        <Image className='card-img' src={request.BaseUrl+props.data.image}></Image>
      </view>
    </View>
  )
}
