import { defineModel } from 'foca';

export const browHistoryModel = defineModel('browHistoryModel', {
  initialState: { articleList:[]},
  actions: {
    add(state, artcle: any) {
        for (let i = 0; i < state.articleList.length; i++) {
            if (state.articleList[i].id === artcle.id) {
                state.articleList.splice(i, 1);
                break;
            }
        }
        state.articleList.push(artcle);
        state.articleList = state.articleList.reverse();
    },
  }
});