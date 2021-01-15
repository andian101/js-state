import Counter from './components/Counter';
import Accounts from './components/Accounts';
import Settings from './components/Settings';
import {useState, createContext} from 'react';

export const MainContext = createContext();

function Main() {
    const [count, setCount] = useState(0);
    const [currency, setCurrency] = useState('£')
    const [theme, setTheme] = useState(false)
    const styles = {
        background: 'black',
        color: 'white'
    }

    return (
        <MainContext.Provider value={{count, setCount, currency, setCurrency, theme, setTheme}}>
            <div className="App" style={theme ? styles : {}}>
                <Counter />
                <Accounts />
                <Settings />
            </div>
        </MainContext.Provider>
    );
}

export default Main;
