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
import axios from "axios";
import { auth, google, facebook } from "./firebaseConfig";

const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

const registerUserSuccess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload,
  };
};

const registerUserFailure = (payload) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload,
  };
};

const loginRequest = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOG_IN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: LOG_IN_FAILURE,
    payload,
  };
};

export const registerUser = (payload) => (dispatch) => {
  dispatch(registerUserRequest());
  axios
    .post("http://localhost:3001/users", payload)
    .then((res) => dispatch(registerUserSuccess(res.data)))
    .catch((err) => dispatch(registerUserFailure(err)));
};

export const registerUserWithSM =(payload)=>(dispatch)=>{
  axios
  .get(`http://localhost:3001/users/${payload.email}/${payload.password}`)
  .then((res) => res)
  .catch((err) => dispatch(registerUser(payload)));
}

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .get(`http://localhost:3001/users/${payload.email}/${payload.password}`)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => dispatch(loginFailure(err)));
};

const loginWithGoogleSuccess = (payload) => {
  return {
    type: LOGIN_WITH_GOOGLE,
    payload,
  };
};

const registerWithGoogleSuccess = (payload) => {
  return {
    type: REGISTER_WITH_GOOGLE_SUCCESS,
    payload,
  };
};
const loginWithFacebookSuccess = (payload) => {
  return {
    type: LOGIN_WITH_FACEBOOK,
    payload,
  };
};

const registerWithFacebookSuccess = (payload) => {
  return {
    type: REGISTER_WITH_FACEBOOK_SUCCESS,
    payload,
  };
};

export const loginWithGoogle = (payload) => (dispatch) => {
  dispatch(loginRequest());
  auth
    .signInWithPopup(google)
    .then((res) => dispatch(loginWithGoogleSuccess(res.user)))
    .catch((err) => dispatch(loginFailure(err)));
};

const registerRequestWithGoogle = () => {
  return {
    type: REGISTER_REQUEST_WITH_GOOGLE,
  };
};
export const registerWithGoogle = (payload) => (dispatch) => {
  dispatch(registerRequestWithGoogle());
  auth
    .signInWithPopup(google)
    .then((res) => dispatch(registerWithGoogleSuccess(res.user)))
    .catch((err) => dispatch(loginFailure(err)));
};

export const loginWithFacebook = (payload) => (dispatch) => {
  dispatch(loginRequest());
  auth
    .signInWithPopup(facebook)
    .then((res) => dispatch(loginWithFacebookSuccess(res.user)))
    .catch((err) => dispatch(loginFailure(err)));
};

const registerRequestWithFacebook = () => {
  return {
    type: REGISTER_REQUEST_WITH_FACEBOOK,
  };
};

export const registerWithFacebook = (payload) => (dispatch) => {
  dispatch(registerRequestWithFacebook());
  auth
    .signInWithPopup(facebook)
    .then((res) => dispatch(registerWithFacebookSuccess(res.user))   
    )
    .catch((err) => dispatch(loginFailure(err)));
};

export const toggle = (payload) => {
  return {
    type: TOGGLE_BETWEEN_REGISTER_LOGIN,
    payload,
  };
};

export const logOut = (payload) => {
  return {
    type: LOG_OUT,
    payload,
  };
};
