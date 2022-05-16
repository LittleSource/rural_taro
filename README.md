# taro项目说明

本项目使用react + taro构建,Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

多端转换支持
Taro 3 可以支持转换到 H5、ReactNative 以及任意小程序平台。

## 启动

```shell
cd $workpath

# 使用 yarn 安装依赖

$ yarn

# OR 使用 cnpm 安装依赖

$ cnpm install

# OR 使用 npm 安装依赖

$ npm install
```

## 编译运行

### 微信小程序

> 其他小程序平台运行参考<https://taro-docs.jd.com/taro/docs/GETTING-STARTED>

```shell
# yarn
$ yarn dev:weapp
$ yarn build:weapp

# npm script
$ npm run dev:weapp
$ npm run build:weapp

# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp

# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # Windows
$ NODE_ENV=production taro build --type weapp --watch # Mac
```
