import { clearData, getData, saveData } from "../../Redux/localStorage";
import {
  GET_USER_ID,
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
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  TOGGLE_TO_FORGET,
  TOGGLE_TO_LOGIN,
  TOGGLE_TO_REGISTER,
} from "./fireActionType";

const auth = getData("isAuth");
const isName =getData("isName");
const isUser =getData("isUser");
const inState = {
  isLoading: false,
  isAuth:auth||false,
  isError: false,
  registerSuccess: false,
  register_page: true,
  login_page: false,
  forget_page: false,
  googleEmail: "",
  googlePassword: "",
  facebook: "",
  facebookPassword: "",
  isMessage: "",
  userData: [],
  displayName: isName||"",
  phone: "",
  isRegisterAuthFB: false,
  isRegisterAuthG: false,
  isResetLoading:false,
  userId:isUser||""
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
      saveData("isAuth",true)
      saveData("isName",payload.first_name)
      return {
        ...state,
        isLoading: false,
        displayName: payload.first_name,
        registerSuccess: true,
        isAuth: true,
        userId:payload._id
      };
    }
    case REGISTER_USER_FAILURE: {
      saveData("isAuth",false)
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
      saveData("isAuth",true)
      return {
        ...state,
        isAuth: true,
        userData: payload,
        userId:payload[0]._id,
        displayName: payload[0].first_name,
      };
    }
    case LOG_IN_FAILURE: {
      saveData("isAuth",false)
      return {
        ...state,
        isAuth: false,
        isMessage: "Login Failed",
        isRegisterAuth: false,
      };
    }
    case TOGGLE_TO_REGISTER: {
      return {
        ...state,
        register_page:true, 
        login_page:false,
        forget_page:false
      };
    }
    case TOGGLE_TO_FORGET: {
      return {
        ...state,
        register_page:false, 
        login_page:false,
        forget_page:true 
      };
    }
    case TOGGLE_TO_LOGIN: {
      return {
        ...state,
        register_page:false, 
        login_page:true,
        forget_page:false  
      };
    }
    case LOGIN_WITH_GOOGLE: {
      saveData("isAuth",true)
      return {
        ...state,
        isAuth: true,
        displayName: payload.displayName,
        googleEmail: payload.email,
        googlePassword: payload.uid,
      };
    }
    case LOGIN_WITH_FACEBOOK: {
      saveData("isAuth",true)
      return {
        ...state,
        isAuth: true,
        displayName: payload.displayName,
        facebook: payload.email,
        facebookPassword: payload.uid,
      };
    }
    case REGISTER_REQUEST_WITH_GOOGLE: {
      return {
        ...state,
      };
    }
    case REGISTER_WITH_GOOGLE_SUCCESS: {
      saveData("isAuth",true)
      return {
        ...state,
        googleEmail: payload.email,
        googlePassword: payload.uid,
        isAuth: true,
        displayName: payload.displayName,
        isRegisterAuthG: true,
        phone: payload.phoneNumber,
        userId:payload._id
      };
    }
    case REGISTER_REQUEST_WITH_FACEBOOK: {
      return {
        ...state,
      };
    }
    case REGISTER_WITH_FACEBOOK_SUCCESS: {
      saveData("isAuth",true)
      return {
        ...state,
        facebook: payload.email,
        facebookPassword: payload.uid,
        isAuth: true,
        displayName: payload.displayName,
        isRegisterAuthFB: true,
        phone: payload.phone,
        userId:payload._id
      };
    }
    case LOG_OUT: {
      clearData()
      return {
        ...state,
        isAuth: false,
        isMessage: "User Logout Successfully",
        isRegisterAuth: false,
        isRegisterAuthFB: false,
        isRegisterAuthG: false,
        facebook:"",
        facebookPassword:"",
        googleEmail: "",
        googlePassword: "",
        userId:"",
        userData:[]
      };
    }
    case RESET_PASSWORD_REQUEST:{
      return{
        ...state,
        isResetLoading:true,
      }
    }
    case RESET_PASSWORD_SUCCESS:{
      return{
        ...state,       
        isMessage:"Reset link send to your register Email address",
        isResetLoading:false,
      }
    }
    case RESET_PASSWORD_FAILURE:{
      return{
        ...state,
       isError:true,
       isMessage:"Failed to reset password"
      }
    }
    case GET_USER_ID:{
      return{
        ...state,
        userId:payload[0]._id
      }
    }
    default:
      return state;
  }
};
