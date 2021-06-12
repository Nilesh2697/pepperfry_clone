import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TOGGLE_BETWEEN_REGISTER_LOGIN } from "./fireActionType";
import axios from "axios";

const registerUserRequest = () => {
    return {
        type:REGISTER_USER_REQUEST,
    };
};

const registerUserSuccess = (payload) => {
    return {
        type:REGISTER_USER_SUCCESS,
        payload
    };
};

const registerUserFailure = (payload) => {
    return {
        type:REGISTER_USER_FAILURE,
        payload
    };
};

const loginRequest= () => {
    return {
        type:LOG_IN_REQUEST,
    };
};

const loginSuccess = (payload) => {
    return {
        type:LOG_IN_SUCCESS,
        payload
    };
};

const loginFailure = (payload) => {
    return {
        type:LOG_IN_FAILURE,
        payload
    };
};

export const registerUser = (payload)=>(dispatch)=>{
    dispatch(registerUserRequest());
    console.log(payload)
    axios.post("http://localhost:3001/users",payload)
    .then(res=>dispatch(registerUserSuccess(res.data)))
    .catch(err=>dispatch(registerUserFailure(err)))
}

export const login =(payload)=>(dispatch,getState,{getFirebase})=>{
      const firebase = getFirebase();
     // console.log(firebase)
      dispatch(loginRequest())
      firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
      .then((res)=>{
          dispatch(loginSuccess(res.data))
      })
      .catch(err=>dispatch(loginFailure(err)))
}

export const toggle=(payload)=>{
    return{
        type:TOGGLE_BETWEEN_REGISTER_LOGIN,
        payload
    }
}

