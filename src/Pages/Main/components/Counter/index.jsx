import { MainContext } from '../../';
import { useContext } from 'react';
import './index.css';


function Counter() {
    const context = useContext(MainContext);
    const {count, setCount} = context;
    
    const setCounter = (val) => {
        return val <= 0 ? setCount(0) : setCount(val);
    }

    return (
        <div className="counter-wrapper">
            <h1>Counter</h1>
            <div className="counter-row">
                <button disabled={count === 0} onClick={() => setCounter(count - 1)}>-</button>
                <span className="counter">{count}</span>
                <button onClick={() => setCounter(count + 1)}>+</button>
            </div>
        </div>
    );
}

export default Counter;
