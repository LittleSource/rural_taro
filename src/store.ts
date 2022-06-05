import { Middleware, store } from 'foca';
import { taroStorage } from 'foca-taro-storage';

import { userModel } from './models/userInfo';

const middleware: Middleware[] = [];

store.init({
  compose: 'redux-devtools',
  middleware,
  persist: [
    {
      version: '1',
      key: `foca-taro-demo-1`,
      engine: taroStorage,
      models: [userModel],
    },
  ],
});

if (module.hot) {
  module.hot.accept();
}