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
        // this.setState({count: this.state.count + 1});
        this.updateCount(true)
    }

    onClickDecrementButton(){
        // this.setState({count: this.state.count - 1});
        this.updateCount(false)
    }

    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement? previousValue +1 : previousValue -1;
        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
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
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f

}

export default Counter;