import './index.css';

function Accounts() {
    const count = 5;
    const currency = "$";

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
