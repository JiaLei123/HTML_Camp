import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export const fetchWeatherStarted = () =>{
    return {
        type: FETCH_STARTED
    }
}


export const fetchWeatherSuccess = (result) => {
    return{
        type: FETCH_SUCCESS,
        result
    }
}

export const fetchWeatherFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error
    }
}

export const fetchWeather = (cityCode) => {
    return (dispatch) =>{
        const apiUrl = `/data/cityinfo/${cityCode}.html`;

        dispatch(fetchWeatherStarted())

        return fetch(apiUrl).then((response) =>{
            if (response.status !== 200){
                throw new Error("fail to get response with staus" +response.status);
            }
            response.json().then((responseJSON) => {
                dispatch(fetchWeatherSuccess(responseJSON.weatherinfo));`   `
            }).catch((error) => {
                throw new Error("Invalied json response" + error);
            });
        }).catch((error) => {
            dispatch(fetchWeatherFailure(error));
        })
    }
}
