import { combineReducers } from "redux";
import {productReducer,selectedproductReducer}  from "./productReducer";

const reducers=combineReducers({
    all:productReducer,
    selected:selectedproductReducer,
    
})
export default reducers;
