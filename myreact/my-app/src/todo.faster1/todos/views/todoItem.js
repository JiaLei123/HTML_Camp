import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 

class TodoItem extends React.Component {
    constructor() {
        super(...arguments);
    }

    shouldComponentUpdate(nextPorps, nextState){
        return (nextPorps.completed !== this.props.completed) || (nextPorps.text !== this.props.text)
    }

    render() {
        const {onToggle, onRemove, completed, text } = this.props;

        return(
            <li className="todo-item" 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            >
                <input className="toggle" type="checkbox" checked={completed? "checked": ""} readOnly onClick={onToggle}/>
                <label className="text">
                    {text}
                </label>
                <button className="remove" onClick={onRemove}>X</button>
            </li>
        )
    }

}


export default TodoItem