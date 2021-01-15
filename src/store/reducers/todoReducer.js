// Group Action names
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';
const DELETE_TODO = 'DELETE_TODO';

// Initial data
const initialState = [
    {
        id: '1',
        title: "Wash Bike",
        description: "Wash bike. Its is dirty",
        completed: false
    }
];

const createTodo = (toDo) => {
    return {
        type: ADD_TODO,
        payload: toDo
    }
}

const toggleComplete = (id) => {
    return {
        type: TOGGLE_TODO_COMPLETE,
        payload: id
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

// Our reducer
const todoReducer = (state, action) => {
    switch(action.type){ 
        case ADD_TODO:
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case TOGGLE_TODO_COMPLETE: 
            return state.map(note => (
                note.id === action.payload.id ? 
                    {...note, completed: !note.completed} : 
                    note
            ))
        
        case DELETE_TODO: 
            return state.filter(note => note.id !== action.payload.id);
        
        default: 
            return state;
    }
}