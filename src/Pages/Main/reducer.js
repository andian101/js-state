export const reducer = (state, action) => {
    switch(action.type) {
        case 'theme': 
            return {
                ...state,
                theme: action.payload
            }
        case 'count':
            return {
                ...state,
                count: action.payload
            };
        case 'currency':
            return {
                ...state,
                currency: action.payload
            };
        default: 
            return state;
    }
}

export const initialState = {
    theme: false,
    count: 0,
    currency: '£',
}