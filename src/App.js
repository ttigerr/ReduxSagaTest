import { createStore,  applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { helloSaga } from './components/saga';
import './App.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(applyMiddleware(sagaMiddleware))
sagaMiddleware.run(helloSaga)

const action = type => store.dispatch({type})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello This is my first Redux saga tutorial</p>
      </header>
    </div>
  );
}

export default App;
