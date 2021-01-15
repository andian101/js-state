import {useContext} from 'react';
import {MainContext} from '../../';
import './index.css';

function Counter() {
    const context = useContext(MainContext);
    const {currency, setCurrency, setTheme, theme} = context;

    return (
        <div className="settings-wrapper">
            <h1>Settings</h1>
            <div className="settings-element">
                <label>Change Currency</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value="£">£</option>
                    <option value="€">€</option>
                    <option value="$">$</option>
                </select>
            </div>
            <div className="settings-element">
                <label>Change Theme</label>
                <button onClick={() => setTheme(!theme)}>
                    {theme ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
}

export default Counter;
