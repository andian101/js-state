import {useState, createContext} from 'react';

export const CounterContext = createContext();

function Counter({children}) {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    );
}

export default Counter;
