import {useContext} from 'react';
import {MainContext} from '../../';
import './index.css';

function Settings() {
    const {state, dispatch} = useContext(MainContext);
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

export default Settings;
