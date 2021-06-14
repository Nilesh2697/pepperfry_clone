import {
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_GOOGLE,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT,
  REGISTER_REQUEST_WITH_FACEBOOK,
  REGISTER_REQUEST_WITH_GOOGLE,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_WITH_FACEBOOK_SUCCESS,
  REGISTER_WITH_GOOGLE_SUCCESS,
  TOGGLE_BETWEEN_REGISTER_LOGIN,
} from "./fireActionType";

const inState = {
  isLoading: false,
  isAuth: false,
  isError: false,
  registerSuccess: false,
  register_page: true,
  googleEmail: "",
  googlePassword: "",
  facebook: "",
  facebookPassword: "",
  isMessage: "",
  userData: [],
  displayName: "",
  phone: "",
  isRegisterAuthFB: false,
  isRegisterAuthG: false,
};

export const fireReducer = (state = inState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        displayName: payload.first_name,
        registerSuccess: true,
        isAuth: true,
      };
    }
    case REGISTER_USER_FAILURE: {
      return {
        ...state,
        isError: true,
        isAuth:false
      };
    }
    case LOG_IN_REQUEST: {
      return {
        ...state,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        userData: payload,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        isMessage: "Login Failed",
        isRegisterAuth: false,
      };
    }
    case TOGGLE_BETWEEN_REGISTER_LOGIN: {
      return {
        ...state,
        register_page: !state.register_page,  
      };
    }
    case LOGIN_WITH_GOOGLE: {
      return {
        ...state,
        isAuth: true,
        displayName: payload.displayName,
      };
    }
    case LOGIN_WITH_FACEBOOK: {
      return {
        ...state,
        isAuth: true,
        displayName: payload.displayName,
      };
    }
    case REGISTER_REQUEST_WITH_GOOGLE: {
      return {
        ...state,
      };
    }
    case REGISTER_WITH_GOOGLE_SUCCESS: {
        console.log(payload.uid)
      return {
        ...state,
        googleEmail: payload.email,
        googlePassword: payload.uid,
        isAuth: true,
        displayName: payload.displayName,
        isRegisterAuthG: true,
        phone: payload.phoneNumber,
      };
    }
    case REGISTER_REQUEST_WITH_FACEBOOK: {
      return {
        ...state,
      };
    }
    case REGISTER_WITH_FACEBOOK_SUCCESS: {
      return {
        ...state,
        facebook: payload.email,
        facebookPassword: payload.uid,
        isAuth: true,
        displayName: payload.displayName,
        isRegisterAuthFB: true,
        phone: payload.phone,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isAuth: false,
        isMessage: "User Logout Successfully",
        isRegisterAuth: false,
        isRegisterAuthFB: false,
        isRegisterAuthG: false,
      };
    }
    default:
      return state;
  }
};
