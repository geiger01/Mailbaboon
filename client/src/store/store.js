
   
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";

const rootReducer = combineReducers({
  authModule: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
