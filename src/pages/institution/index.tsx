import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"

import request from '../../api/request'

const Index = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    request.getInstitution().then(data => {
      setList(data)
    })
  }, []);

  const NavArticle = (id) => {
    Taro.navigateTo({
      url: `/pages/article/index?id=${id}`
    })
  }

  return (
    <View >
    <AtList>
      {
        list.map(item => {
          return (
            <AtListItem title={item.title} arrow='right' onClick={()=>NavArticle(item.id)} />
          )
        })
      }
      </AtList>
    </View>
  );
};

export default Index;
