import { MainContext } from '../../';
import { useContext } from 'react';
import './index.css';


function Counter() {
    const {actions: {increment, decrement}, state: { count }} = useContext(MainContext);

    return (
        <div className="counter-wrapper">
            <h1>Counter</h1>
            <div className="counter-row">
                <button disabled={count === 0} onClick={() => increment()}>-</button>
                <span className="counter">{count}</span>
                <button onClick={() => decrement()}>+</button>
            </div>
        </div>
    );
}

export default Counter;
