import {useContext} from 'react';
import {CounterContext} from '../../Context';
import './index.css';


function Counter() {
    const {dispatch, state: {count}} = useContext(CounterContext);
    const setCounter = (val) => {
        const sentVal = val <= 0 ? 0 : val;
        return dispatch({type: 'count', payload: sentVal});
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
