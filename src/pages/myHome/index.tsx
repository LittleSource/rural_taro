
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
import  './index.less';

const Index = () => {

  useEffect(() => {
    // 12
  }, []);

  return (
    <View >
<AtList>
  <AtListItem
    title='所属网格'
    extraText='详细信息'
    iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
  />
  <AtListItem
    title='社区名称'
    extraText='详细信息'
    iconInfo={{ size: 25, color: '#178529', value: 'bookmark', }}
  />
  <AtListItem
    title='单元名称'
    extraText='详细信息'
    iconInfo={{ size: 25, color: '#FF00CC', value: 'bullet-list', }}
  />
  <AtListItem
    title='房屋类型'
    extraText='详细信息'
    iconInfo={{ size: 25, color: '#FF4949', value: 'home', }}
  />
  <AtListItem
    title='房屋状态'
    extraText='详细信息'
    iconInfo={{ size: 25, color: '#246abf', value: 'money', }}
  />
</AtList>
    </View>
  );
};

export default Index;
