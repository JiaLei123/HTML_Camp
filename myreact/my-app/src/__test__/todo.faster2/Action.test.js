import {addTodo} from '../../todo.faster2/todos/Action';
import  {ADD_TODO, TOGGLE_TODO, REMOVE_TODO}  from '../../todo.faster2/todos/ActionType';

it("should create an action to add to", ()=>{
    const test = "first to do"
    const action = addTodo(test)

    expect(action.text).toBe(test)
    expect(action.completed).toBe(false)
    expect(action.type).toBe(ADD_TODO)
})