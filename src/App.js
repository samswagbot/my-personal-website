import React from 'react';
import { Router } from 'react-router-dom';

import history from './global/services/history'; 
import Routes from './global/routes/index';

const App = () => (
    <Router history={history}>
        <Routes /> 
      
    </Router>
)

export default App;