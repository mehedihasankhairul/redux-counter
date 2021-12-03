import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

// here 
// store.subscribe(() =>   console.log('store changed', store.getState()));


ReactDOM.render(
  <React.StrictMode>
  {/* we need provider for pass data all components */}
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
