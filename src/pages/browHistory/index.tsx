
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { useModel } from 'foca';
import { browHistoryModel } from '../../models/browHistory';
import ArticleCard from '../../components/article-card'
import './index.less';

const Index = () => {
  const { articleList } = useModel(browHistoryModel);
  useEffect(() => {
    // 12
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
