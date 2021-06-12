import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { DataListReducer } from "./DataList/reducer";
<<<<<<< HEAD:src/Redux/store.js
import { fireReducer } from "../Components/Login/fireReducer";
import {reactReduxFirebase ,getFirebase} from "react-redux-firebase";
import firebaseConfig from "../Components/Login/firebaseConfig"; 
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    dataList: DataListReducer,
    fireReducer:fireReducer,
    firebase :firebaseReducer,
=======
import { SearchReducer } from "./Search/reducer";

const rootReducer = combineReducers({
    dataList: DataListReducer,
    search: SearchReducer
>>>>>>> 48bec79aacb4dc07078157791381d3d775679fb1:Frontend/src/Redux/store.js
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
