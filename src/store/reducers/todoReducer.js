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

// Our reducer
const todoReducer = (state = initialState, action) => {
    switch(action.type){ 
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]

        case TOGGLE_TODO_COMPLETE: 
            return state.map(note => (
                note.id === action.payload ? 
                    {...note, completed: !note.completed} : 
                    note
            ))
        
        case DELETE_TODO: 
            return state.filter(note => note.id !== action.payload);
        
        default: 
            return state;
    }
}

export default todoReducer;