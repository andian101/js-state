import './index.css';
import { useContext } from 'react';
import { MainContext } from '../../';

function Accounts() {
    const {state} = useContext(MainContext);
    const {count, currency} = state;

    return (
        <div className="accounts-wrapper">
            <h1>Accounts</h1>
            <div>Sales: <b>{currency}{count * 20}</b></div>
            <div>VAT: <b>{currency}{count * 20 * .2}</b></div>
            <div>Total: <b>{currency}{(count * 20 * .2) + count * 20}</b></div>
        </div>
    );
}

export default Accounts;
