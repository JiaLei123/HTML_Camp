import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as weatherReducer} from './weather/';
import { LOADING } from './weather/Status';

const reducer = combineReducers({
    weather: weatherReducer
});

const middlewares = [thunkMiddleware]

const storeEnhancer = compose(
    applyMiddleware(...middlewares),
)

const initState = {
    weather:{
        status: LOADING ,
        cityName: "" ,
        weather: "",
        lowestTemp: "",
        highestTemp: ""
    },
}

export default createStore(reducer, initState, storeEnhancer)