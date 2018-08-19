import {createStore, combineReducers} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as fitlerReducer} from './filter';

const reducer = combineReducers({
    todos: todoReducer,
    filter: fitlerReducer
})

export default createStore(reducer)