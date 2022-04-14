import { INews, New, NewsActions, NewsState } from "./../types";

const initialState: NewsState = {
  news: [],
};

export const newsReducer = (state = initialState, action: NewsActions) => {
  switch (action.type) {
    case INews.GET_NEWS:
      return {
        news: [...action.payload],
      };
    case INews.REMOVE_NEWS:
      const filterNews = state.news.filter(
        (item) => item.id !== action.payload
      );
      return {
        news: filterNews,
      };
    case INews.SET_APPROVED:
      const newNews = state.news.map((item: New) =>
        item.id === action.payload
          ? { ...item, approved: !item.approved }
          : item
      );
      return {
        news: newNews,
      };
    case INews.ADD_NEWS:
      return {
        news: [action.payload, ...state.news],
      };
    default:
      return state;
  }
};
