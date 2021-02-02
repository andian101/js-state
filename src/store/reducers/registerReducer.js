// Group Action names
export const REG_EDIT_FIELD = 'REG_EDIT_FIELD';

// Initial data
const initialState = {
    firstName: "",
    lastName: "",
    age: 0,
    address: "",
    postcode: ""
}

export const createTodo = (toDo) => {
    return {
        type: ADD_TODO,
        payload: toDo
    }
}

// Our reducer
const registerReducer = (state = initialState, action) => {
    switch(action.type){ 
        case EDIT_FIELD:
            return {
            ...state,
            [action.field]: action.value
            }
        default:
            return {...state}
        }
}

export default registerReducer;