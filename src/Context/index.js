import {createContext, useReducer} from 'react';
import {reducer, initialState} from './reducer';
import './styles.css';

export const CounterContext = createContext();
function Counter({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <CounterContext.Provider value={{state, dispatch}}>
            <div className={`App ${state.theme ? 'dark-theme': 'light-theme'}`}>
                {children}
            </div>
        </CounterContext.Provider>
    );
}

export default Counter;
