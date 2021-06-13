import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { DataListReducer } from "./DataList/reducer";
import { fireReducer } from "../Components/Login/fireReducer";
import {SearchReducer} from "./Search/reducer"

const rootReducer = combineReducers({
    dataList: DataListReducer,
    fireReducer:fireReducer,
    search:SearchReducer,
});
 
export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
