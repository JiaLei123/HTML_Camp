import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 

const TodoItem = ({onToggle, onRemove, completed, text}) => {
    const checkedProp = completed ? {checked: true} : {};
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

export default TodoItem