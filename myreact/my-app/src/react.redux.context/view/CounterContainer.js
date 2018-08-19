import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import * as Actions from '../Action.js';
import store from '../Store.js';
import Counter from './Counter.js';

const buttonStyle = {
    margin: '10px'
  };

class CounterContainer extends Component {

    constructor(props) {
      super(props);
  
      this.onChange = this.onChange.bind(this);
      this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
      this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
  
      this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    onChange() {
       this.setState(this.getOwnState())
    }

    onClickIncrementButton() {
        store.dispatch(Actions.increment(this.props.caption))
    }

    onClickDecrementButton() {
        store.dispatch(Actions.decrement(this.props.caption))
    }
    render() {
        return (
            <Counter caption={this.props.caption} onClickIncrementButton={this.onClickIncrementButton} onClickDecrementButton={this.onClickDecrementButton} value={this.state.value}/>
        );
    }
}

CounterContainer.contextTypes = {
    store:PropTypes.object
}

export default CounterContainer;