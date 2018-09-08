import {fetchWeather, fetchWeatherStarted} from '../../weather_redux/weather/actions';
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from '../../weather_redux/weather/actionTypes';
import {stub} from 'sinon';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import reducer from '../../weather_redux/weather/reducer';
import * as Status from '../../weather_redux/weather/Status';

const middlewares = [thunk]
const createMockStore = configureStore(middlewares)

describe("fetchwetcher", ()=>{
    let stubbedFetch;
    beforeEach(() =>{
        stubbedFetch = stub(global, 'fetch');
    });
    afterEach(() =>{
        stubbedFetch.restore();
    })

    

    it("should dispatch featchWeather", ()=>{
        const mockResponse = Promise.resolve({
            status:200,
            json: ()=> Promise.resolve({
                weatherinfo: {}
            })
        });

        stubbedFetch.returns(mockResponse);
        const store = createMockStore({})

        return store.dispatch(fetchWeather())
            .then(() => {
                const actions = store.getActions()
                expect(actions.length).toBe(2)
            })
    })

    it("should return loading status", ()=>{
        const action = fetchWeatherStarted();
        const newStatue = reducer({}, action);
        expect(newStatue.status).toBe(Status.LOADING);

    })
})
