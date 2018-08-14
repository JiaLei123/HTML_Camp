import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import * as Actions from '../Action.js';
import store from '../Store.js';

const buttonStyle = {
    margin: '10px'
  };

class Counter extends Component {

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
        const {caption} = this.props;
        return (
            <div>
            <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
            <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
            <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter;