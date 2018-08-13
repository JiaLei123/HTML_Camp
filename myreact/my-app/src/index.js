import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KanBan from './kanban/KanBan';
import ClickCounter from './deep_re/ClickCounter'
import ControlPane from './deep_re/ControlPanel'
import Acc_Scatter from './dashboard/acc_satter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Acc_Scatter />, document.getElementById('root'));
registerServiceWorker();
