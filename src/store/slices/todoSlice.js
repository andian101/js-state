import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    todos: [
        {
            id: '1',
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
        createTodo(state, payload) {
            state.todos = [...state.todos, {...payload.todo}]
        },
        toggleComplete(state, payload) {
            state.todos = state.todos.map(note => (
                note.id === payload.id ? 
                    {...note, completed: !note.completed} : 
                    note
            ))
        },
        deleteTodo(state, payload) {
            state.todos = state.todos.filter(note => note.id !== payload.id)
        },
        setLoading(state, payload) {
            state.loading = payload.loading;
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
export const getToDoImage = (data) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true))
        const quotes = await (await fetch('https://60031a89a3c5f100179130a2.mockapi.io/id')).json();
        const quote = quotes[Math.floor(Math.random() * quotes.length) + 1];
        const newData = { ...data, quote: quote.quote };
        
        // Fake timer
        await setTimeout(() => {
            dispatch(createTodo(newData));
            dispatch(setLoading(false))
        }, 1000);
    };
}

export default todoSlice;