import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';


import Home from './Home';
import About from './About';
import NotFound from './NotFound';
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