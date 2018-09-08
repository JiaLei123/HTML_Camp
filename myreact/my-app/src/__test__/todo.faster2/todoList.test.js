import React from 'react';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer as todoReducer, actions} from '../../todo.faster2/todos/index';
import {reducer as fitlerReducer} from '../../todo.faster2/filter/index';
import { FilterTypes } from '../../todo.faster2/constants';
import TodoList from '../../todo.faster2/todos/views/todoList';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("todos", ()=> {
    it("should add new todo-item on addTodo action", ()=>{
        const reducer = combineReducers({
            todos: todoReducer,
            filter: fitlerReducer
        })
        
        const store = createStore(reducer, {todos:[], filter: FilterTypes.ALL});

        const subject = (
            <Provider store={store}>
                <TodoList />
            </Provider>
        )

        const wrapper = mount(subject)

        store.dispatch(actions.addTodo('write more test'));
        expect(wrapper.children().text()).toEqual('write more testX');
    })
})