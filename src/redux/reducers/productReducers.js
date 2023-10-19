import {actionTypes} from '../contants/action-Types'
import {data} from '../../data'
const initialState=data;

export const reducers=(state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
} 