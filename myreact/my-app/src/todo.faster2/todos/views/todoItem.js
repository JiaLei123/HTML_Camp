import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import { toggleTodo, removeTodo } from '../Action';

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

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps
    return {
        onToggle: () => {dispatch(toggleTodo(id))}, 
        onRemove: () => {dispatch(removeTodo(id))}
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)