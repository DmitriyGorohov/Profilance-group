import { ThunkAction } from "redux-thunk";
import { v4 as uuidv4 } from "uuid";

import { news } from "./../../types/index";
import { RootState } from "./../store";
import { INews, NewsActions } from "../types";

export const fetchNews = (): ThunkAction<
  void,
  RootState,
  null,
  NewsActions
> => {
  return (dispatch) => {
    dispatch({
      type: INews.GET_NEWS,
      payload: news,
    });
  };
};

export const removeNews = (
  id: string
): ThunkAction<void, RootState, null, NewsActions> => {
  return (dispatch) => {
    dispatch({
      type: INews.REMOVE_NEWS,
      payload: id,
    });
  };
};

export const approvedNews = (
  id: string
): ThunkAction<void, RootState, null, NewsActions> => {
  return (dispatch) => {
    dispatch({
      type: INews.SET_APPROVED,
      payload: id,
    });
  };
};

export const addNews = (
  title: string,
  description: string
): ThunkAction<void, RootState, null, NewsActions> => {
  return (dispatch) => {
    const newPost = {
      id: uuidv4(),
      title,
      description,
      time: new Date().toLocaleString(),
      approved: false,
    };
    dispatch({
      type: INews.ADD_NEWS,
      payload: newPost,
    });
  };
};
