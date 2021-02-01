import {useContext} from 'react';
import {MainContext} from '../../';
import './index.css';


function Counter() {
    const {state, dispatch} = useContext(MainContext);
    const {count} = state;
    
    const setCounter = (val) => {
        const payload = val <= 0 ? 0 : val;
        return dispatch({
            type: 'count',
            payload
        })
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
