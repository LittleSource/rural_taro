# taro项目说明

本项目使用react + taro构建,Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用。

多端转换支持
Taro 3 可以支持转换到 H5、ReactNative 以及任意小程序平台。

## 安装依赖

```shell

# 使用 yarn 安装依赖

$ yarn

# 安装taro-cli

$ yarn global add @tarojs/cli
```

## 启动

### 微信小程序

> 其他小程序平台运行参考<https://taro-docs.jd.com/taro/docs/GETTING-STARTED>

```shell
# 启动开发模式
$ yarn dev:weapp
# 编译打包
$ yarn build:weapp

# 注意，编译完成后生成的代码在dist目录中，在微信小程序开发者工具中打开此目录即可

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # Windows
$ NODE_ENV=production taro build --type weapp --watch # Mac
```
