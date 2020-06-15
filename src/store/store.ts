import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from './middleware/logger'
import api from './middleware/api'
import rootReducer from './modules'

let store;
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, api, logger)))
} else {
    store = createStore(rootReducer, applyMiddleware(thunk, api, logger))
}



export default store;