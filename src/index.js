import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom';

import './Styles.css';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));