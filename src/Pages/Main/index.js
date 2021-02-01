import Counter from './components/Counter';
import Accounts from './components/Accounts';
import Settings from './components/Settings';
import {useReducer, createContext} from 'react';
import {initialState, reducer} from './reducer';
import './main.css';

export const MainContext = createContext();

function Main() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme } = state;
    
    return (
        <MainContext.Provider 
            value={{state, dispatch}}>
            <div className={theme ? 'dark-theme' : 'light-theme'}>
                <Counter />
                <Accounts />
                <Settings />
            </div>
        </MainContext.Provider>
    );
}

export default Main;
