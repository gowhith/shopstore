import { ActionTypes } from "../constants/action-types";
export const setproducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
}
}
export const selectedproducts=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
}
}
export const removeselectedproducts=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
}
}