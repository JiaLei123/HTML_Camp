import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import App from './App';


class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

    }
}

export default Routes