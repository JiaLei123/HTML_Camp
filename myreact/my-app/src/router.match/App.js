import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';


class App extends Component {
    render(){
        return(
            <div>
                <Header/>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/notFound" component={NotFound} />
                        <Redirect to="/notFound" />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App