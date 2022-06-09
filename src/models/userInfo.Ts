import { defineModel } from 'foca';

export const userModel = defineModel('userModel', {
  initialState: { userInfo: null,token:""},
  actions: {
    login(state, userInfo: any, token: string) {
      state.userInfo = userInfo;
      state.token = token;
    },
  }
});