import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Block } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem, AtGrid } from 'taro-ui'

import './index.less';
const Index = () => {
  const gridList = [
    {
      image: 'https://cdn.52ym.vip/rural/mine/dianzan.png',
      value: '我的点赞'
    },
    {
      image: 'https://cdn.52ym.vip/rural/mine/pinglun.png',
      value: '我的评论'
    },
    {
      image: 'https://cdn.52ym.vip/rural/mine/shoucang.png',
      value: '我的收藏'
    },
    {
      image: 'https://cdn.52ym.vip/rural/mine/yuedu.png',
      value: '阅读历史'
    }
  ]
  useEffect(() => {
    // 12
  }, []);

  const navLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/index'
    })
  }

  const NavAbout = () => {
    Taro.navigateTo({
      url: '/pages/about/index'
    })
  }

  return (
    <View>
      <view className='hearder'>
        <view className='avatar-box' onClick={navLogin}>
          <AtAvatar image='https://cdn.52ym.vip/rural/mine/notLoginAvatar.webp' size='large' circle></AtAvatar>
          <View className='text'>登录</View>
        </view>
      </view>
      <view className='content'>
        <view>
          <AtGrid data={gridList} hasBorder={false} columnNum={4} />
        </view>
        <view className='list'>
          <AtList>
            <AtListItem title='我家' arrow='right' />
            <AtListItem onClick={NavAbout} title='关于' arrow='right' />
          </AtList>
        </view>
      </view>
    </View>
  );
};

export default Index;
