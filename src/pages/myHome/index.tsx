import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui"
import request from '../../api/request'
import { useModel } from 'foca';
import { userModel } from '../../models/userInfo';
import  './index.less';

const Index = () => {
  const [house, setHouse] = useState({gridId:'',communityName:'',detailAddress:'',houseProperty:'出租屋',houseStatus:''})
  const { token } = useModel(userModel);
  useEffect(() => {
    request.getHouseInfo({
      token: token,
    }).then(res => {
      setHouse(res.house)
    })
  }, []);

  return (
    <View >
<AtList>
  <AtListItem
    title='所属网格'
    extraText={house.gridId}
    iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
  />
  <AtListItem
    title='社区名称'
    extraText={house.communityName}
    iconInfo={{ size: 25, color: '#178529', value: 'bookmark', }}
  />
  <AtListItem
    title='详细地址'
    extraText={house.detailAddress}
    iconInfo={{ size: 25, color: '#FF00CC', value: 'bullet-list', }}
  />
  <AtListItem
    title='房屋类型'
    extraText={house.houseProperty}
    iconInfo={{ size: 25, color: '#FF4949', value: 'home', }}
  />
  <AtListItem
    title='房屋状态'
    extraText={house.houseStatus}
    iconInfo={{ size: 25, color: '#246abf', value: 'money', }}
  />
</AtList>
    </View>
  );
};

export default Index;
