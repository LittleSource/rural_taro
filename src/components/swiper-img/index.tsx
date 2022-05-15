import { Image ,Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
// 引入 Swiper, SwiperItem 组件
const SwiperImg = (props) => {
  return (
    <Swiper
      className='swiper'
      indicatorColor='#666'
      indicatorActiveColor='#ccc'
      circular
      indicatorDots
      autoplay>
        {
          props.swiperList.map((item,index)=>{
            return (
              <SwiperItem key={index}>
                  <Image className='swiper-img' src={item}>1</Image>
              </SwiperItem>
            )
          })
        }
    </Swiper>
  )
}

export default SwiperImg