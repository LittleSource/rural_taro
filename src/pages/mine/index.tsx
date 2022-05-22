import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtAvatar,AtList,AtListItem,AtGrid } from 'taro-ui'

import './index.less';
const Index = () => {
  const gridList = [
    {
      image: 'https://cdn.52ym.vip/rural/grid/dangjian.png',
      value: '我的点赞'
    },
    {
      image: 'https://cdn.52ym.vip/rural/grid/shijian.png',
      value: '我的评论'
    },
    {
      image: 'https://cdn.52ym.vip/rural/grid/fazhi.png',
      value: '我的收藏'
    },
    {
      image: 'https://cdn.52ym.vip/rural/grid/sanwu.png',
      value: '阅读历史'
    }
  ]
  useEffect(() => {
    // 12
  }, []);

  return (
    <View>
      <view className='hearder'>
        <AtAvatar image='https://jdc.jd.com/img/200' size='large' circle></AtAvatar>
        <View className='text'>登录</View>
      </view>
      <view className='content'>
        <view>
          <AtGrid data={gridList} hasBorder={false} columnNum={4} />
        </view>
        <view className='list'>
        <AtList>
          <AtListItem title='我家' arrow='right' />
          <AtListItem title='关于' arrow='right' />
        </AtList>
        </view>
      </view>
    </View>
  );
};

export default Index;
