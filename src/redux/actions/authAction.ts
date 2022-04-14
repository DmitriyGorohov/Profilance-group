import { ThunkAction } from "redux-thunk";

import { RootState } from "./../store";
import { admin, user } from "../../types";
import { AuthActions, IAdmin, IPerson, IUser } from "../types";

export const signInAdmin = (
  data: IUser
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    if (data.name === admin.name && data.password === admin.password) {
      dispatch(setAdmin(data));
      dispatch(setVisiblePopup(false));
      dispatch(setSuccess("Авторизация успешна"));
    } else {
      dispatch(setError("Вы ввели неправильное имя Администратора или пароль"));
    }
  };
};

export const signInUser = (
  data: IUser
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    if (data.name === user.name && data.password === user.password) {
      dispatch(setUser(data));
      dispatch(setVisiblePopup(false));
      dispatch(setSuccess("Авторизация успешна"));
    } else {
      dispatch(setError("Вы ввели неправильное имя пользователя или пароль"));
    }
  };
};

export const setAdmin = (
  data: IAdmin
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    dispatch({
      type: IPerson.SET_ADMIN,
      payload: data,
    });
  };
};

export const setUser = (
  data: IUser
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    dispatch({
      type: IPerson.SET_USER,
      payload: data,
    });
  };
};

export const setSignOut = (): ThunkAction<
  void,
  RootState,
  null,
  AuthActions
> => {
  return (dispatch) => {
    dispatch({
      type: IPerson.LOG_OUT,
    });
  };
};

export const setVisiblePopup = (
  payload: boolean
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    dispatch({
      type: IPerson.SET_VISIBLE,
      payload,
    });
  };
};

export const setSuccess = (
  value: string
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    dispatch({
      type: IPerson.SET_SUCCESS,
      payload: value,
    });
  };
};

export const setError = (
  value: string
): ThunkAction<void, RootState, null, AuthActions> => {
  return (dispatch) => {
    dispatch({
      type: IPerson.SET_ERROR,
      payload: value,
    });
  };
};
