import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>
                Home
                {console.log(this.props.match)}
                {this.props.match.path}
                <hr/>
                {this.props.match.url}
                <Switch>    
                    <Route path={this.props.match.path} exact component={Home1} />
                    <Route path={`${this.props.match.path}/detail`} component={Home2} />
                </Switch>
            </div>
        );
    }
}


const Home1 = () => (
    <div>Home1</div>
)

const Home2 = () => (
    <div>Home2</div>
)
export default Home