
   
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
//   platformModule: platformReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
