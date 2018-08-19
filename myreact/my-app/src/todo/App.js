import {Provider} from 'C:/Users/JiaLei/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import React from 'C:/Users/JiaLei/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import TodoApp from './TodoApp';
import store from './Store';

function App(){
    return(
        <Provider store={store}>
            <TodoApp />
        </Provider>
    )
}

export default App;