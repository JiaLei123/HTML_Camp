import {createStore, combineReducers} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as fitlerReducer} from './filter';
import { FilterTypes } from './constants';

const reducer = combineReducers({
    todos: todoReducer,
    filter: fitlerReducer
})

const initState = {
    todos: [{
        completed: false,
        id:0,
        text:"55"
    }],
    filter: FilterTypes.ALL
    
}
const store = createStore(reducer, initState);

export default store