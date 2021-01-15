const initialState = {
    tasks: []
}

var id = 0;

export default function(state=initialState, action) {
    switch(action.type){
        case 'ADD_TODO':
           
            return{
                ...state,
                tasks: state.tasks.concat({
                    id: id++,
                    text: action.payload.text,
                    done: false
                })
            }
        
        case 'TOGGLE_DONE':
            return ({
                ...state,
                tasks : state.tasks.map(task => {
                    if(task.id !== action.payload.id){
                        return task
                    }
                    else{
                        return {
                            ...task,
                            done: !task.done
                        };
                    };
                })
            });

            case 'DELETE_TODO':
                id--;
                return{
                    ...state,
                    tasks: state.tasks.filter( task => 
                        task.id !== action.payload
                    )
                }    

        default:
            return state
    }
}