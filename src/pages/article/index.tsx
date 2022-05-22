
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtForm, AtInput,AtIcon } from 'taro-ui';
import './index.less';
import request from '../../api/request';
import '../../assets/css/iconfont.css';

const Index = () => {
  const html = `<!--HTML--><p>为弘扬中华民族传统节日文化，杨柳青镇开展了以“送福到家”为主题的派发新年福袋活动。福袋中包括春联、福字、吊钱等具有我国春节特色的文化物品。</p><p><img src="/js/userfiles/admin/images/20211013/q1_$1634112191430021388.jpg" title="q1_$1634112191430021388.jpg" alt="q1.jpg"/></p><p><img src="/js/userfiles/admin/images/20211013/q2_$1634112197081073648.jpg" title="q2_$1634112197081073648.jpg" alt="q2.jpg"/></p><p><img src="/js/userfiles/admin/images/20211013/q3_$1634112202278025278.jpg" title="q3_$1634112202278025278.jpg" alt="q3.jpg"/></p><p><img src="/js/userfiles/admin/images/20211013/q4_$1634112208296090301.jpg" title="q4_$1634112208296090301.jpg" alt="q4.jpg"/></p><p>活动中，村居工作人员将一个个写满祝福的福袋送到群众手中，带去喜庆祥和的同时也提高了居民朋友对传统节日的重视和理解，承载着祝福的福袋被居民满心欢喜地领回家，一位阿姨领到福袋高兴地说：“这么有福气的福袋，我想多要一份也给邻居带点儿喜气回去！”</p><p><br/></p><p><br/></p><p>福袋送手中，笑容甜心里！临近新春佳节，杨柳青镇希望这份小礼物能受到居民朋友的欢迎，同时也为他们送上诚挚的问候与祝福！</p><p><br/></p>`
  const [acticleData,setActicleData] = useState({title:'这里是文章标题',content:html});
  useEffect(() => {
    const acticleId = Taro.getCurrentInstance().router.params.id;
    request.getArticleDetail({
      id:acticleId
    }).then(data => {
      setActicleData(data)
      console.log(data)
    })
  }, []);

  (Taro as any).options.html.transformElement = (el) => {
    if (el.nodeName === 'image') {
      el.setAttribute('src', request.BaseUrl + el.props.src);
    }
    return el;
  }

  return (
    <view>
      <View className='title'>{acticleData.title}</View>
      <View className='html-content'>
        <View dangerouslySetInnerHTML={{ __html: acticleData.content }}></View>
      </View>
      <view className='bottom-box'>
        <View className='left-box'>
          <View className='text'>写评论</View>
        </View>
        <View className='right-box'>
          <AtIcon value='iconfont icon-zan-l' size='25' color='#666'></AtIcon>
          <AtIcon value='iconfont icon-zhuanfa' size='25' color='#666'></AtIcon>
          <AtIcon value='iconfont icon-star' size='25' color='#666'></AtIcon>
        </View>
      </view>
      <view className='safe-bottom'></view>
    </view>
  );
};

export default Index;
