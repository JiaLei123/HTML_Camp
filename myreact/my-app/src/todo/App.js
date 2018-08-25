import {Provider} from 'react-redux';
import React from 'react';
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