
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.less';
import request from '../../api/request'

import ArticleCard from '../../components/article-card'

const Index = () => {
  const [current, setCurrent] = useState(0)
  const [tabList, setTabList] = useState([])
  const [articleList,setArticleList] = useState([])

  const handleClick = (value) => {
    setCurrent(value)
    getArticleList(tabList[value].id)
  }

  useEffect(() => {
    const categoryId = Taro.getCurrentInstance().router.params.category_id
    request.getCategory({}).then(data => {
      console.log(data)
      const categoryList = data.categoryApiList
      for (let index = 0; index < categoryList.length; index++) {
        if (categoryList[index].id == categoryId) {
          const tabList = categoryList[index].children
          for (let i = 0; i < tabList.length; i++) {
            tabList[i].title = tabList[i].categoryName
          }
          setTabList(tabList)
          getArticleList(tabList[0].id)
        }
      }
    })
  }, []);

  const getArticleList = (categoryId :string) => {
    request.getArticleList({
      categoryCode:categoryId
    }).then(data=>{
      console.log(data)
      for (let index = 0; index < data.length; index++) {
        data[index].image = request.BaseUrl + data[index].image
      }
      setArticleList(data)
    })
  }


  return (
    <AtTabs current={current} tabList={tabList} scroll onClick={handleClick.bind(this)}>
      {
        tabList.map((item, index) => {
          return (
            <AtTabsPane current={current} index={index} >
              {
                articleList.map((item, index) => {
                  return (
                    <view style={{ marginTop: '10rpx' }}>
                      <ArticleCard data={item} />
                    </view>
                  )
                })
              }
            </AtTabsPane>
          )
        })
      }
    </AtTabs>
  )
};

export default Index;
