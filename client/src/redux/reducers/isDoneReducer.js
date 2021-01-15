const initialState = {
    tasks: []
}

var id = 0;

export default function(state, action){
    switch(action.type){
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                id: id++,
                done: action.payload.done   
            })
        default:
            return state;
    }
}