import {combineReducers} from 'redux'
import entities from './entities'
import views from './views'
import app from './app'

const rootReducers = combineReducers({
    entities,
    views,
    app
})

export default rootReducers