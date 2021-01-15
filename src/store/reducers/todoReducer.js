// Group Action names
const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const DELETE = 'DELETE';

// Initial data
const initialState = [
    {
        id: '1',
        title: "Wash Bike",
        description: "Wash bike. Its is dirty",
        completed: false
    }
]

// Our reducer
const todoReducer = (state, action) => {
    switch(action.type){ 
        case ADD:
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case TOGGLE: 
            return state.map(note => (
                note.id === action.payload.id ? 
                    {...note, completed: !note.completed} : 
                    note
            ))
        
        case DELETE: 
            return state.filter(note => note.id !== action.payload.id);
        
        default: 
            return state;
    }
    

}