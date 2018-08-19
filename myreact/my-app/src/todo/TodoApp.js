import React from 'C:/Users/JiaLei/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {view as Todos} from './todos';
import {view as Filter} from './filter';

function TodoApp(){
    return(
        <div>
            <Todos />
            <Filter />
        </div>
    )
}

export default TodoApp;