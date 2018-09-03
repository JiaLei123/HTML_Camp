import fetchWeather from '../../weather_redux/weather/actions';
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from '../../weather_redux/weather/actionTypes';
import {stub} from 'sinon';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

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
        return createMockStore.dispatch(fetchWeather(1)).then(()=>{
            const dispatchedActions = store.getActions();
            // expect(dispatchedActions.length).toBe(2);
        });
    })
})
