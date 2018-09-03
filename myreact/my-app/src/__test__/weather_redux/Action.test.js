import moduleName from '../../weather_redux/weather/actions';
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from '../../weather_redux/weather/actionTypes';
import {stub} from 'sinon';

describe("fetchwetcher", ()=>{
    let stubbedFetch;
    beforeEach(() =>{
        stubbedFetch = stub(global, 'fetch');
    });

})