// Group Action names
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';
const DELETE_TODO = 'DELETE_TODO';
const LOADING_TODO = 'LOADING_TODO';

// Initial data
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

export const createTodo = (toDo) => {
    return {
        type: ADD_TODO,
        payload: toDo
    }
}

export const toggleComplete = (id) => {
    return {
        type: TOGGLE_TODO_COMPLETE,
        payload: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const setLoading = (isLoading) => {
    return {
        type:  LOADING_TODO,
        payload: isLoading,
    }
}

// Our reducer
const todoReducer = (state = initialState, action) => {
    switch(action.type){ 
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        case TOGGLE_TODO_COMPLETE: 
            return {
                ...state,
                todos: [
                    ...state.todos.map(note => (
                        note.id === action.payload ? 
                            {...note, completed: !note.completed} : 
                            note
                    ))
                ]
            }
        
        case DELETE_TODO: 
            return {
                ...state,
                todos: [
                    ...state.todos.filter(note => note.id !== action.payload)
                ]
            }
        case LOADING_TODO: 
            console.log('test', action.payload)
            return {
                ...state,
                loading: action.payload
            }
        
        default: 
            return state;
    }
}

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

export default todoReducer;