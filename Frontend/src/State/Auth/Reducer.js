import {
  GET_ALL_USER_FAILURE,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";

const initalState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
  users: [],
  message: null,
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_ALL_USER_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        jwt: action.payload,
        message: action.payload.message,
      };

    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, user: action.payload };
    case GET_ALL_USER_SUCCESS:
      return { ...state, isLoading: false, error: null, users: action.payload };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_ALL_USER_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case LOGOUT:
      localStorage.removeItem("jwt");
      return { ...state, jwt: null, user: null };
    default:
      return state;
  }
};
