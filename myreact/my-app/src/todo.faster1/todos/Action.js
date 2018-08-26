import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}  from './ActionType';

let nextTodoID = 1;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoID++,
    text:text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})