import {useContext} from 'react';
import {CounterContext} from '../../Context';
import './index.css';

function Counter() {
    const {state, dispatch} = useContext(CounterContext);
    const {currency, theme} = state;

    return (
        <div className="settings-wrapper">
            <h1>Settings</h1>
            <div className="settings-element">
                <label>Change Currency</label>
                <select value={currency} onChange={(e) => dispatch({ type: 'currency', payload: e.target.value })}>
                    <option value="£">£</option>
                    <option value="€">€</option>
                    <option value="$">$</option>
                </select>
            </div>
            <div className="settings-element">
                <label>Change Theme</label>
                <button onClick={() => dispatch({type: 'theme', payload: !theme})}>
                    {theme ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
}

export default Counter;
