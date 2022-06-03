
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import { AtCard, AtForm, AtInput, AtButton } from 'taro-ui'
import './index.less';

const Index = () => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // 12
  }, []);

  const handleChange = (value) => {

  }
  const onSubmit = (event) => {
    console.log(event)
  }

  return (
    <View className='login-box'>
      <AtCard
        title='用户登录'
      >
        <AtForm onSubmit={onSubmit}>
          <AtInput
            name='phone'
            title='手机号'
            type='text'
            placeholder='请输入手机号'
            value={phone}
            onChange={handleChange}
          />
          <AtInput
            name='password'
            title='密码'
            type='password'
            placeholder='请输入密码'
            value={password}
            onChange={handleChange}
          />
          <view style={{height:'30rpx'}}></view>
          <AtButton formType='submit'>登录</AtButton>
        </AtForm>
      </AtCard>
    </View>
  );
};

export default Index;
