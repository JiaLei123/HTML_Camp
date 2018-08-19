import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}  from './ActionType';

let nextTodoID = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoID++,
    text:text
});

export const togleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})