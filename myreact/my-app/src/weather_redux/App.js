import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {view as CitySelector} from './city_selector/';
import {view as Weather} from './weather/';
import store from './Store'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <CitySelector />
                <Weather />
            </div>
        </Provider>
    );
  }
}

export default App;
