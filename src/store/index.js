import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoReducer from './reducers/todoReducer'

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    todos: todoReducer
});

const store = createStore(reducers, middleware);
export default store;