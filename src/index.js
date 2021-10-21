import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/StateContextProvider';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <StateContextProvider>
    <App />
    </StateContextProvider>
   </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

