import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/toDo';
import registerReducer from './reducers/registration';

const middleware = [ thunk ]

const reducers = combineReducers({
    todos: todoReducer,
    register: registerReducer
});

export const store = createStore(reducers, applyMiddleware(...middleware));