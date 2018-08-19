import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import * as Actions from '../Action.js';
import store from '../Store.js';

const buttonStyle = {
    margin: '10px'
  };

class Counter extends Component {
    render() {
        const {caption, onClickIncrementButton, onClickDecrementButton, value} = this.props;
        return (
            <div>
            <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
            <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
            <span>{caption} count: {value}</span>
            </div>
        );
    }
}

export default Counter;