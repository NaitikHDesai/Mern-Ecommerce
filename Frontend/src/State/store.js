import { applyMiddleware ,combineReducers,legacy_createStore } from 'redux';
import {thunk} from "redux-thunk";
import { authReducer } from './Auth/Reducer';
import {  customerProductReducer } from './Products/Reducer';
import { cartReducer } from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';
import adminOrderReducer from './Admin/Order/Reducer';
import ReviewReducer from './Review/Reducer';
import productReducer from './Admin/Product/Reducer';

const rootReducers=combineReducers({
    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    review:ReviewReducer,


    adminOrder:adminOrderReducer,
    adminReducer:productReducer,
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));
