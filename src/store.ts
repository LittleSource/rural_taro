import { Middleware, store } from 'foca';
import { taroStorage } from 'foca-taro-storage';

import { userModel } from './models/userInfo';
import { browHistoryModel } from './models/browHistory';

const middleware: Middleware[] = [];

store.init({
  compose: 'redux-devtools',
  middleware,
  persist: [
    {
      version: '1',
      key: `foca-taro-demo-1`,
      engine: taroStorage,
      models: [userModel,browHistoryModel],
    },
  ],
});

if (module.hot) {
  module.hot.accept();
}