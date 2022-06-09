
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
import request from '../../api/request'
import { useModel } from 'foca';
import { userModel } from '../../models/userInfo';
import './index.less';

const Index = () => {
  const { token } = useModel(userModel);
  const [commonList, setCommonList] = useState([])
  useEffect(() => {
    request.getCommentList({
      token: token
    }).then(res => {
      if (res.code !=200) {
        Taro.showToast({
          title: res.msg,
          icon: 'none',
          duration: 3000
        })
        return;
      }
      setCommonList(res.data)
    })
  }, []);

  const navArticle = (item) => {
    Taro.navigateTo({
      url: '/pages/article/index?id=' + item.articleId
    })
  }

  return (
    <View >
      <AtList>
        {
          commonList.map((item) => {
            return (
              <AtListItem
                arrow='right'
                note={item.createDate}
                title={item.articleTitle}
                extraText={item.content}
                onClick={()=>navArticle(item)}
              />
            )
          })
        }
      </AtList>
    </View>
  );
};

export default Index;
