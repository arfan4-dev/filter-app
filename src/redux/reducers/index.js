
import {combineReducers} from 'redux'
import {reducers} from './productReducers'

 const reducer=combineReducers({
    allProducts:reducers,
})

export default reducer 

