import './index.css';
import {MainContext} from '../../';
import {useContext} from 'react'

function Accounts() {
    const { state: { count, currency } } = useContext(MainContext);

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
