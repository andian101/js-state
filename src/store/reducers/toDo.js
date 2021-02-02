// Action Types
const TODO_CREATE_NOTE = 'TODO_CREATE_NOTE';
const TODO_DELETE_NOTE = 'TODO_DELETE_NOTE';
const TODO_COMPLETE_NOTE = 'TODO_COMPLETE_NOTE';
const TODO_LOADING = 'TODO_LOADING';

// Action Creators
export const createNote = note => {
    return {
        type: TODO_CREATE_NOTE,
        payload: note
    }
}

export const deleteNote = noteId => {
    return {
        type: TODO_DELETE_NOTE,
        payload: noteId
    }
}

export const completeNote = noteId => {
    return {
        type: TODO_COMPLETE_NOTE,
        payload: noteId
    }
}
export const setLoading = loading => {
    return {
        type: TODO_LOADING,
        payload: loading
    }
}

// Initial State
const initialState = {
    todos: [
        {
            id: '1',
            title: "Wash Bike",
            description: "Something something",
            completed: false
        }
    ],
    loading: false
}

// Reducer
const todoReducer = (state = initialState, action) => {
    switch(action.type){ 
        case TODO_CREATE_NOTE:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        case TODO_COMPLETE_NOTE: 
            return {
                ...state,
                todos: state.todos.map(note => (
                    note.id === action.payload ? 
                        {...note, completed: !note.completed} : 
                        note
                ))
            }
        
        case TODO_DELETE_NOTE: 
            return {
                ...state,
                todos: state.todos.filter(note => note.id !== action.payload)
            }
        
        case TODO_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        
        default: 
            return state;
    }
}

export const getToDoQuote = (data) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        const quotes = await (await fetch('https://60031a89a3c5f100179130a2.mockapi.io/id')).json();
        const quote = quotes[Math.floor(Math.random() * quotes.length) + 1];
        const newData = { ...data, quote: quote.quote };
        
        await setTimeout(() => {
            dispatch(createNote(newData));
            dispatch(setLoading(false))
        }, 1000);
    };
}

export default todoReducer;