import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
const Index = () => {

  useEffect(() => {
    // 12
  }, []);

  return (
    <View >
      <AtList>
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
      </AtList>
    </View>
  );
};

export default Index;
