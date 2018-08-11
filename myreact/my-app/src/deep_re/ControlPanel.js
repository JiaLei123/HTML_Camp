import React, { Component } from 'react';
import Counter from './Counter.js';

const style={
    margin:'20px'
};

class ControlPanel extends Component {
    constructor(props){
        super(props);
        
        this.onCounterUpdate = this.onCounterUpdate.bind(this)

        this.initValues = [0, 10, 20];
        const initSum  = this.initValues.reduce((a, b) => a + b, 0)
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newVluae, previousVlaue){
        const valueChange = newVluae - previousVlaue;
        this.setState({sum: this.state.sum + valueChange});
    }

    render() {
        return(
            <div>
                <Counter onUpdate={this.onCounterUpdate} caption={20}/>
                <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]}/>
                <Counter onUpdate={this.onCounterUpdate} caption="Thrid" initValue={this.initValues[2]}/>
            <hr/>
            <div>Total Count: {this.state.sum} </div>
            </div>
        )
    }
}

export default ControlPanel;