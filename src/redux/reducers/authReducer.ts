import { AuthActions, AuthState, IPerson } from "../types";

const initialState: AuthState = {
  admin: null,
  user: null,
  isAuth: false,
  error: "",
  success: "",
  visibleForm: false,
};

export const authReducer = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case IPerson.SET_ADMIN:
      return {
        ...state,
        admin: action.payload,
        user: null,
        isAuth: true,
      };
    case IPerson.SET_USER:
      return {
        ...state,
        admin: null,
        user: action.payload,
        isAuth: true,
      };
    case IPerson.SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case IPerson.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case IPerson.SET_VISIBLE:
      return {
        ...state,
        visibleForm: !state.visibleForm,
      };
    case IPerson.LOG_OUT:
      return {
        admin: null,
        user: null,
        isAuth: false,
        error: "",
        success: "",
        visibleForm: false,
      };
    default:
      return state;
  }
};
