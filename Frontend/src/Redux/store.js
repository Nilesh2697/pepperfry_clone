import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { DataListReducer } from "./DataList/reducer";
import { fireReducer } from "./FireAuth/fireReducer"
import {SearchReducer} from "./Search/reducer"
import { ItemReducer } from "./Item/reducer"
import { IndividualReducer } from "../Components/IndividualPage/IndividualReducer";

const rootReducer = combineReducers({
    dataList: DataListReducer,
    fireReducer: fireReducer,
    search: SearchReducer,
    item: ItemReducer,
    categoryReducer:IndividualReducer
});
 
export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);
