import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { DataListReducer } from "./DataList/reducer";
import { fireReducer } from "../Components/Login/fireReducer";
import {reactReduxFirebase ,getFirebase} from "react-redux-firebase";
import firebaseConfig from "../Components/Login/firebaseConfig"; 
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    dataList: DataListReducer,
    fireReducer:fireReducer,
    firebase :firebaseReducer,
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
        // reactReduxFirebase(),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
