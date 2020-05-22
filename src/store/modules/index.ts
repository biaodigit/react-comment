import {combineReducers} from 'redux'
import entities from './entities'
import views from './views'
import base from './base'

const rootReducers = combineReducers({
    entities,
    views,
    base
})

export default rootReducers