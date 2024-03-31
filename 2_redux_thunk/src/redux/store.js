import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  productReducer,
  basketReducer,
});

export default createStore(rootReducer);
