import {Provider} from 'react-redux';
import store from './store'
import ToDo from './Pages/ToDo';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  )
}

export default App;
