import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore, compose } from 'redux'
import rootReducer from './reducers'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store'
import './App.css';

const store = Store()

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

