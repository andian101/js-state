import Counter from './components/Counter';
import Accounts from './components/Accounts';
import Settings from './components/Settings';
import {createContext, useReducer} from 'react';
import {reducer, initialState} from './reducer';
import useActions from './actions';
import './main.css';

export const MainContext = createContext();

function Main() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(dispatch, state);

    return (
        <MainContext.Provider value={{state, actions}}>
            <div className={`App ${state.theme ? 'dark-theme': 'light-theme'}`}>
                <Counter />
                <Accounts />
                <Settings />
            </div>
        </MainContext.Provider>
    );
}

export default Main;
