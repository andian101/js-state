import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import Settings from './components/Settings'
import Accounts from './components/Accounts'
import CounterContext from './Context';

function App() {
  return (
      <CounterContext>
        <Counter />
        <Settings />
        <Accounts />
      </CounterContext>
  );
}

export default App;
