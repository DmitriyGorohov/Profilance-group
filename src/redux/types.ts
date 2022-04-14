// News
export enum INews {
  GET_NEWS = "GET_NEWS",
  SET_APPROVED = "SET_APPROVED",
  GET_NEW_ID = "GET_NEW_ID",
  ADD_NEWS = "ADD_NEWS",
  REMOVE_NEWS = "REMOVE_NEWS",
}

export interface New {
  id: string;
  title: string;
  description: string;
  approved: boolean;
  time: string;
}

export interface NewsState {
  news: New[] | [];
}

//Actions News

interface GetNewsAction {
  type: typeof INews.GET_NEWS;
  payload: New[];
}

interface SetApprovedAction {
  type: typeof INews.SET_APPROVED;
  payload: string;
}

interface AddNewsAction {
  type: typeof INews.ADD_NEWS;
  payload: New;
}

interface GetNewIdAction {
  type: typeof INews.GET_NEW_ID;
  payload: string;
}

interface SetRemoveAction {
  type: typeof INews.REMOVE_NEWS;
  payload: string;
}

interface SetAddNewsAction {
  type: typeof INews.ADD_NEWS;
  payload: New;
}

export type NewsActions =
  | GetNewsAction
  | SetApprovedAction
  | AddNewsAction
  | GetNewIdAction
  | SetRemoveAction
  | SetAddNewsAction;

// Auth
export enum IPerson {
  SET_ADMIN = "SET_ADMIN",
  SET_USER = " SET_USER",
  SET_SUCCESS = "SET_SUCCESS",
  SET_ERROR = "SET_ERROR",
  SET_VISIBLE = "SET_VISIBLE",
  LOG_OUT = "LOG_OUT",
}

export interface IAdmin {
  name: string;
  password: string;
}

export interface IUser {
  name: string;
  password: string;
}

export interface AuthState {
  admin: IAdmin | null;
  user: IUser | null;
  isAuth: boolean;
  error: string;
  success: string;
  visibleForm: boolean;
}

// Auth Actions

interface SetAdminAction {
  type: typeof IPerson.SET_ADMIN;
  payload: IAdmin;
}

interface SetUserAction {
  type: typeof IPerson.SET_USER;
  payload: IUser;
}

interface SuccessAction {
  type: typeof IPerson.SET_SUCCESS;
  payload: string;
}

interface ErrorAction {
  type: typeof IPerson.SET_ERROR;
  payload: string;
}

interface SetVisibleAction {
  type: typeof IPerson.SET_VISIBLE;
  payload: boolean;
}

interface SetLogOutAction {
  type: typeof IPerson.LOG_OUT;
}

export type AuthActions =
  | SetAdminAction
  | SetUserAction
  | SuccessAction
  | SetLogOutAction
  | ErrorAction
  | SetVisibleAction;
