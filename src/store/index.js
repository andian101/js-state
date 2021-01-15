import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer'

// Combine Reducers
var reducers = combineReducers({
    todos: todoReducer
});

const store = createStore(reducers);
export default store;