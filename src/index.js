import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { combineReducers,  createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import myFirstReducer from './components/reducer';
import mySaga from './components/saga';

// Declarations
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

