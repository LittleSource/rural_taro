
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
import './index.less';

const Index = () => {

  const [commonList, setCommonList] = useState([{},{},{},{},{},{},{},{},{},{},{}])
  useEffect(() => {
    // 12
  }, []);

  const navArticle = (item) => {
    Taro.navigateTo({
      url: '/pages/article/index?id=' + item.id
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
                note='描述信息'
                title='标题文字标题文字标题文字标题文字标题文字'
                extraText='详细信息详细信息详细信息详细信息'
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
