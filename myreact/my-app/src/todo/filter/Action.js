import {SET_FILTER}  from './actionType';

let nextTodoID = 0;

export const setFilter = (filterType) => ({
    type: SET_FILTER,
    filter: filterType
});
