import {combineReducers} from 'redux'
import comment from './comment'
import orders from './orders'
import products from './products'
import shops from './shops'

const rootReducer = combineReducers({
    comment,
    orders,
    products,
    shops
})

export default rootReducer