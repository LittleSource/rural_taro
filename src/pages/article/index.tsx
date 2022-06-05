
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from '@tarojs/components';
import { AtForm, AtInput,AtIcon } from 'taro-ui';
import { useModel } from 'foca';
import { userModel } from '../../models/userInfo';
import request from '../../api/request';
import './index.less';
import '../../assets/css/iconfont.css';

const Index = () => {
  const { token } = useModel(userModel);
  const html = `<!--HTML--><p><br/></p>`
  const [acticleData,setActicleData] = useState({title:'这里是文章标题',content:html});
  useEffect(() => {
    const acticleId = Taro.getCurrentInstance().router.params.id;
    request.getArticleDetail({
      id:acticleId
    }).then(data => {
      setActicleData(data)
      console.log(data)
    })
  }, []);

  (Taro as any).options.html.transformElement = (el) => {
    if (el.nodeName === 'image') {
      el.setAttribute('src', request.BaseUrl + el.props.src);
    }
    return el;
  }

  const onShare = () => {
    Taro.showShareMenu({
      withShareTicket: true
    })
  }

  const addLike = () => {
    request.addLike({
      article_id:acticleData.id,
      token:token
    }).then(data => {
      console.log(data)
    })
  }

  return (
    <view>
      <View className='title'>{acticleData.title}</View>
      <View className='html-content'>
        <View dangerouslySetInnerHTML={{ __html: acticleData.content }}></View>
      </View>
      <view className='bottom-box'>
        <View className='left-box'>
          <View className='text'>写评论</View>
        </View>
        <View className='right-box'>
          <AtIcon onClick={addLike} value='iconfont icon-zan-l' size='25' color='#666'></AtIcon>
          <Button className='button-none' openType='share'>
            <AtIcon onClick={onShare} value='iconfont icon-zhuanfa' size='25' color='#666'></AtIcon>
          </Button>
          <AtIcon value='iconfont icon-star' size='25' color='#666'></AtIcon>
        </View>
      </view>
      <view className='safe-bottom'></view>
    </view>
  );
};

export default Index;
