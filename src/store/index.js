import {createStore, combineReducers} from "redux";
import categoryReducer from "./reducers/category.reducer";
import serviceReducer from "./reducers/services.reducer";

const RootReducer = combineReducers({
    category: categoryReducer,
    service: serviceReducer
})

export default createStore(RootReducer)