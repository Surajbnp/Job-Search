import { applyMiddleware, legacy_createStore } from "redux";
import reducer from "./data/reducer";
import thunk from "redux-thunk";

//const rootReducer = combineReducers({ AppReducer, AuthReducer });
const store = legacy_createStore(reducer, applyMiddleware(thunk));
export { store };
