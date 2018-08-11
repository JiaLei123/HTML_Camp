import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
const buttonStyle = {
    margin: '10px'
}

class Counter extends Component{
    constructor(props){
        super(props);

        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)

        this.state = {
            count: props.initValue
        }
    }

    onClickIncrementButton(){
        this.setState({count: this.state.count + 1});
    }

    onClickDecrementButton(){
        this.setState({count: this.state.count - 1});
    }

    render(){
        const {caption} = this.props;
        return(
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequried,
    initValue: PropTypes.number
};


export default Counter;