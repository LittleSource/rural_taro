
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtCard, AtForm, AtInput, AtButton } from 'taro-ui'
import './index.less';
import request from '../../api/request';
import { userModel } from '../../models/userInfo';
const Index = () => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // 12
  }, []);

  const phoneChange = (value) => {
    setPhone(value);
  }

  const passwordChange = (value) => {
    setPassword(value);
  }

  const onSubmit = () => {
    request.login({
      phone,
      password
    }).then(res => {
      console.log(res)
      if (res.code !=200) {
        Taro.showToast({
          title: res.msg,
          icon: 'none',
          duration: 3000
        })
        return;
      }
      const data = res.data;
      userModel.login(data.userInfo,data.token);
      Taro.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      })
      setTimeout(() => {
        Taro.switchTab({
          url: '/pages/mine/index'
        })
      },1500)
    })
  }

  return (
    <View className='login-box'>
      <AtCard
        title='用户登录'
      >
        <AtForm>
          <AtInput
            name='phone'
            title='手机号'
            type='text'
            placeholder='请输入手机号'
            value={phone}
            onChange={phoneChange}
          />
          <AtInput
            name='password'
            title='密码'
            type='password'
            placeholder='请输入密码'
            value={password}
            onChange={passwordChange}
          />
          <view style={{height:'30rpx'}}></view>
          <AtButton onClick={onSubmit}>登录</AtButton>
        </AtForm>
      </AtCard>
    </View>
  );
};

export default Index;
