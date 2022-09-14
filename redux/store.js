import {legacy_createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import houseReducer from './reducers/houseReducer';

const rootReducer = combineReducers({
    house: houseReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default legacy_createStore(rootReducer, middleware);