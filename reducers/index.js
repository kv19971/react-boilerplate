import CounterReducer from './counter'

import { combineReducers } from 'redux'

const reducers = combineReducers({
    counter: CounterReducer
});

export default reducers;