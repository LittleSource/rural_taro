
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Button } from '@tarojs/components';
import { AtTextarea, AtIcon, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { useModel } from 'foca';
import { userModel } from '../../models/userInfo';
import request from '../../api/request';
import './index.less';
import '../../assets/css/iconfont.css';

const Index = () => {
  const { token,userInfo } = useModel(userModel);
  const html = `<!--HTML--><p><br/></p>`
  const [acticleData, setActicleData] = useState({ title: '这里是文章标题', content: html });

  const [isLike, setIsLike] = useState(false);
  const [isCollect, setIsCollect] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [commentText, setcommentText] = useState("");

  useEffect(() => {
    const acticleId = Taro.getCurrentInstance().router.params.id;
    let requestData = {
      id: acticleId,
    }
    if (token) {
      requestData.token = token;
    }
    request.getArticleDetail(requestData).then(data => {
      setActicleData(data)
      setIsLike(data.isLike)
      setIsCollect(data.isCollect)
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
    if (isLike) {
      return;
    }
    request.addLike({
      article_id: acticleData.id,
      token: token
    }).then(() => {
      setIsLike(true)
    })
  }

  const addCollect = () => {
    if (isCollect) {
      return;
    }
    request.addCollect({
      article_id: acticleData.id,
      token: token
    }).then(() => {
      setIsCollect(true)
    })
  }

  const openModal = () => {
    console.log(userInfo)
    setIsShowModal(true)
  }

  const closeModal = () => {
    setIsShowModal(false)
  }

  const textareaChange = (value) => {
    setcommentText(value)
  }

  const submitComment = () => {
    if (commentText.length === 0) {
      return;
    }
    request.addComment({
      articleId: acticleData.id,
      content: commentText,
      parentId: 0,
      categoryCode: '2123',
      articleTitle: acticleData.title,
      token: token,
      name:userInfo.userName,
      ip:'0.0.0.0'
    }).then((res) => {
      if (res.code == 200){
        Taro.showToast({
          title: '评论成功',
        })
        closeModal()
      }else{
        Taro.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    })
  }

  return (
    <view>
      <View className='title'>{acticleData.title}</View>
      <View className='html-content'>
        <View dangerouslySetInnerHTML={{ __html: acticleData.content }}></View>
      </View>
      <view className='bottom-box'>
        <View className='left-box' onClick={openModal}>
          <View className='text'>写评论</View>
        </View>
        <View className='right-box'>
          <AtIcon onClick={addLike} value={isLike ? 'iconfont icon-zan-f' : 'iconfont icon-zan-l'} size='25' color='#666'></AtIcon>
          <Button className='button-none' openType='share'>
            <AtIcon onClick={onShare} value='iconfont icon-zhuanfa' size='25' color='#666'></AtIcon>
          </Button>
          <AtIcon onClick={addCollect} value={isCollect ? 'iconfont icon-star-fill' : 'iconfont icon-star'} size='25' color='#666'></AtIcon>
        </View>
      </view>
      <AtModal isOpened={isShowModal}>
        <AtModalHeader>评论</AtModalHeader>
        <AtModalContent>
          <AtTextarea
            maxLength="100"
            value={commentText}
            onChange={textareaChange}
            placeholder='请输入您的评论'
          />
        </AtModalContent>
        <AtModalAction> 
          <Button onClick={closeModal}>取消</Button> 
          <Button onClick={submitComment}>确定</Button> 
        </AtModalAction>
      </AtModal>
      <view className='safe-bottom'></view>
    </view>
  );
};

export default Index;
