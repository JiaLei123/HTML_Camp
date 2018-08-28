import {SET_FILTER}  from './ActionType';

let nextTodoID = 0;

export const setFilter = (filterType) => ({
    type: SET_FILTER,
    filter: filterType
});
