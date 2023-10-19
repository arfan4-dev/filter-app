import { actionTypes } from "../contants/action-Types"

export const setProducts=(products)=>{
    return {
        type:actionTypes.SET_PRODUCTS,
         payload:products
    }
}


export const selectProduct=(product)=>{
    return {
        type:actionTypes.SELECTED_PRODUCT,
         payload:product
    }
}