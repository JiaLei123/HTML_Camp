import React, { Component } from 'react';
import Provider from './Provider';
import store from './Store';
import ControlPanel from './view/ControlPanel';

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <ControlPanel />
            </Provider>
        );
    }
}

export default App;
