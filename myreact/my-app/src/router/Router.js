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
                <Route path="/" component={App}>        
                    <Route path="home" Component={Home}/>
                    <Route path="About" Component={About}/>
                    <Route path="*" Component={NotFound}/>
                </Route>
            </BrowserRouter>
        );

    }
}

export default Routes