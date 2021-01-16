import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    todos: [
        {
            id: 1,
            title: "Wash Bike",
            description: "Wash bike. Its is dirty",
            completed: false
        }
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo(state, {payload: { todo }}) {
            state.todos = [...state.todos, todo]
        },
        toggleComplete(state, {payload: {id}}) {
            state.todos = state.todos.map(note => (
                note.id === id ? 
                    {...note, completed: !note.completed} : 
                    note
            ))
        },
        deleteTodo(state, {payload: {id}}) {
            state.todos = state.todos.filter(note => note.id !== id)
        },
        setLoading(state, {payload: {loading}}) {
            state.loading = loading;
        },
    }
})

export const {
    createTodo, 
    toggleComplete, 
    deleteTodo, 
    setLoading, 
} = todoSlice.actions;

// Async Actions - Thunks
export const getToDoQuote = (data) => {
    return async (dispatch, getState) => {
        dispatch(setLoading({loading: true}))
        const quotes = await (await fetch('https://60031a89a3c5f100179130a2.mockapi.io/id')).json();
        
        const quote = quotes[Math.floor(Math.random() * quotes.length) + 1];
        const todo = { ...data, quote: quote.quote };
        console.log('todo', todo)
        
        // Fake timer
        await setTimeout(() => {
            dispatch(createTodo({ todo }));
            dispatch(setLoading({ loading: false }))
        }, 1000);
    };
}

export default todoSlice;