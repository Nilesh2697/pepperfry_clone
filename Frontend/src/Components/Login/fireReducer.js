import { LOGIN_WITH_FACEBOOK, LOGIN_WITH_GOOGLE, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TOGGLE_BETWEEN_REGISTER_LOGIN } from "./fireActionType";


const inState={
   isLoading:false,
   isAuth:false,
   isError:false,
   registerSuccess:false,
   register_page:true,
   login_page:false,
   googleEmail:"",
   googlePassword:"",
   facebook:"",
   facebookPassword:"",
   isMessage:"",
   userData:[],
   displayName:""
}

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
                displayName:payload.first_name,
                registerSuccess:true,
                isAuth:true
            };
        }
        case REGISTER_USER_FAILURE: {
            return {
                ...state,
              isError: true,
              
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
              isAuth:true,
              userData:payload
            };
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
              isAuth:false,
              isMessage:"Login Failed"
            };
        }
        case TOGGLE_BETWEEN_REGISTER_LOGIN: {
            return {
                ...state,
               register_page:!state.register_page,
               login_page:!state.login_page
            };
        }
        case LOGIN_WITH_GOOGLE: {
            return {
                ...state,
                googleEmail:payload.email,
                googlePassword:"",
                isAuth:true,
                displayName:payload.displayName,              
            };
        }
        case LOGIN_WITH_FACEBOOK: {
            return {
                ...state,
                facebook:payload.email,
                facebookPassword:"",
                isAuth:true,
                displayName:payload.displayName,              
            };
        }
        case LOG_OUT: {
            return {
                ...state,
              isAuth:false,
              isMessage:"User Logout Successfully"
            };
        }
        default:
            return state
    }
}