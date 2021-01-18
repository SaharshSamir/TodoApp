export const addTodo = (text) => {
    return function(dispatch){
        dispatch({
            type: 'ADD_TODO',
            payload: {
                text: text,
                done: false
            }
        })
    }
}

export const isDone = (id) => {
    return function(dispatch){
        dispatch({
            type: 'TOGGLE_DONE',
            payload: {
                id,
                done: true
            }
        })
    }
}

export const deleteTodo = (id) => {
    return function(dispatch) {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }
}