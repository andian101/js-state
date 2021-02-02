import ToDo from './Pages/ToDo';
import {Provider} from 'react-redux';
import {store} from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
