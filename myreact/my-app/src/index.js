import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import GroceryList from './GroceryList'
import KanBan from './kanban/KanBan';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KanBan />, document.getElementById('root'));
registerServiceWorker();
