import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Block } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem, AtGrid } from 'taro-ui'
import { useModel } from 'foca';
import { userModel } from '../../models/userInfo';
import './index.less';
const Index = () => {
  const { userInfo } = useModel(userModel);
  const gridList = [
    {
      image: 'https://cdn.52ym.vip/rural/mine/dianzan.png',
      value: '我的点赞',
      path:'/pages/likeList/index'
    },
    {
      image: 'https://cdn.52ym.vip/rural/mine/pinglun.png',
      value: '我的评论',
      path:'/pages/commentList/index'
    },
    {
      image: 'https://cdn.52ym.vip/rural/mine/shoucang.png',
      value: '我的收藏',
      path:'/pages/collectList/index'
    },
    {
      image: 'https://cdn.52ym.vip/rural/mine/yuedu.png',
      value: '阅读历史',
      path:'/pages/browHistory/index'
    }
  ]
  useEffect(() => {
  },[]);

  const navLogin = () => {
    if (!userInfo) {
      Taro.navigateTo({
        url: '/pages/login/index'
      })
    }
  }

  const NavAbout = () => {
    Taro.navigateTo({
      url: '/pages/about/index'
    })
  }

  const NavMyHome = () => {
    if (!userInfo){
      Taro.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 3000
      })
    }else{
      Taro.navigateTo({
        url: '/pages/myHome/index'
      })
    }
  }

  const NavGrid = (item) => {
    if (!userInfo){
      Taro.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 3000
      })
    }else{
      Taro.navigateTo({
        url: item.path
      })
    }
  }

  return (
    <View>
      <view className='hearder'>
        <view className='avatar-box' onClick={navLogin}>
          <AtAvatar image={userInfo ? 'https://cdn.52ym.vip/rural/mine/avatar.jpg':'https://cdn.52ym.vip/rural/mine/notLoginAvatar.webp'} size='large' circle></AtAvatar>
          <View className='text'>{userInfo ? userInfo.userName :'登录'}</View>
        </view>
      </view>
      <view className='content'>
        <view>
          <AtGrid data={gridList} hasBorder={false} columnNum={4} onClick={NavGrid} />
        </view>
        <view className='list'>
          <AtList>
            <AtListItem onClick={NavMyHome} title='我家' arrow='right' />
            <AtListItem onClick={NavAbout} title='关于' arrow='right' />
          </AtList>
        </view>
      </view>
    </View>
  );
};

export default Index;
