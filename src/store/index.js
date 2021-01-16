import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import todos from './slices/todoSlice'

const logger = createLogger();
const middleware = [
    ...getDefaultMiddleware(),
    logger
];

const reducers = combineReducers({
    todos: todos.reducer
});

const store = configureStore({
    reducer: reducers,
    middleware
})
export default store;