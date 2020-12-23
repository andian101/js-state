import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Accounts from './components/Accounts'
import CounterContext from './Context';

function App() {
  return (
    <div className="App">
      <CounterContext>
        <Counter />
        <Accounts />
      </CounterContext>
    </div>
  );
}

export default App;
