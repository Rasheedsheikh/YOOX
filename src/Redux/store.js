import { applyMiddleware, combineReducers, legacy_createStore,compose  } from "redux";
import thunk from "redux-thunk";
import {reducer, reducer2 ,isAuthreducer, reducer4} from "./reducer";

export const rootReducer= combineReducers({ 
    data:reducer,
    product:reducer2,
    signin:isAuthreducer,
    cart: reducer4
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(
    rootReducer,composeEnhancers(applyMiddleware(thunk))
)

