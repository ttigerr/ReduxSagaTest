import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {getUsersFetch} from './components/actions';


function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  return (
    <div className="App">
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <div> Users: {users.map((user => (<div>{user.name, user.email}</div>)))}</div>
    </div>
  );
}

export default App;
