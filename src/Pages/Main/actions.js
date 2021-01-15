import {useCallback} from 'react';


const useActions = (dispatch, state) => {
    const increment = useCallback(() => {
        return dispatch({
            type: 'increment'
        })
    }, [dispatch])

    const decrement = useCallback(() => {
        return dispatch({
            type: 'decrement'
        })
    }, [dispatch])

    const toggleTheme = useCallback(() => {
        return dispatch({
            type: 'theme',
            payload: !state.theme
        })
    }, [dispatch, state.theme])

    const setCurrency = useCallback((currency) => {
        return dispatch({
            type: 'currency',
            payload: currency
        })
    }, [dispatch])

    return {
        increment,
        decrement,
        toggleTheme,
        setCurrency
    }
} 

export default useActions;
