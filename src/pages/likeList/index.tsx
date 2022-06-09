import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { useModel } from 'foca';
import { userModel } from '../../models/userInfo';
import ArticleCard from '../../components/article-card'
import request from '../../api/request'
import './index.less';

const Index = () => {
  const { token } = useModel(userModel);
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    request.getLikeList({
      token: token
    }).then(data => {
      setArticleList(data.dataList)
    })
  }, []);

  return (
    <View >
      {
        articleList.map((item) => {
          return (
            <view style={{ marginTop: '10rpx' }}>
              <ArticleCard data={item}></ArticleCard>
            </view>
          )
        })
      }
    </View>
  );
};

export default Index;
