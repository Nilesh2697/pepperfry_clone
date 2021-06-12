import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TOGGLE_BETWEEN_REGISTER_LOGIN } from "./fireActionType";


const inState={
   isLoading:false,
   isAuth:false,
   isError:false,
   registration:"",
   register_page:true,
   login_page:false
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
                registration:payload,
                isAuth:true
            };
        }
        case REGISTER_USER_FAILURE: {
            return {
                ...state,
              isError: true,
              registration:payload,
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
              isAuth:payload
            };
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
              isAuth:"Login failed"
            };
        }
        case TOGGLE_BETWEEN_REGISTER_LOGIN: {
            return {
                ...state,
               register_page:!state.register_page,
               login_page:!state.login_page
            };
        }
        default:
            return state
    }
}