import {useState, createContext} from 'react';

export const CounterContext = createContext();

function Counter({children}) {
    const [count, setCount] = useState(0);
    const [currency, setCurrency] = useState('£')
    const [theme, setTheme] = useState(false)
    const styles = {
        background: 'black',
        color: 'white'
    }

    return (
        <CounterContext.Provider value={{count, setCount, currency, setCurrency, theme, setTheme}}>
            <div className="App" style={theme ? styles : {}}>
                {children}
            </div>
        </CounterContext.Provider>
    );
}

export default Counter;
