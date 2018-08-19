import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import * as Actions from '../Action.js';
import store from '../Store.js';
import {connect} from 'react-redux';

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

function mapStateToProps(state, ownProps){
    return{
        value: state[ownProps.caption]
    };
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        onClickIncrementButton:() => {
            dispatch(Actions.increment(ownProps.caption))
        },
        onClickDecrementButton: () =>{
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);