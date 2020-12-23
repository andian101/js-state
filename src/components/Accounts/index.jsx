import {useContext} from 'react';
import {CounterContext} from '../../Context';
import './index.css';


function Counter() {
    const context = useContext(CounterContext);
    const {count} = context;

    return (
        <div className="accounts-wrapper">
            <h1>Accounts</h1>
            <div>Sales: <b>£{count * 20}</b></div>
            <div>VAT: <b>£{count * 20 * .2}</b></div>
            <div>Total: <b>£{(count * 20 * .2) + count * 20}</b></div>
        </div>
    );
}

export default Counter;
