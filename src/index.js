import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./components/Router";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import './fairyDustCursor';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
