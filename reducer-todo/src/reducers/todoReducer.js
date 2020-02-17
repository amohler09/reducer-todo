
export const initialState = {
    todos: [
        {
            item: 'Learn Redux',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Create a Todo App',
            completed: false,
            id: 3892987590
        },
        {
            item: 'Do Coding Challenges',
            completed: false,
            id: 3892987591
        },
        {
            item: 'Finish Scrimba Course',
            completed: false,
            id: 3892987592
        },        
    ]
}

export const todoReducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            console.log('state:', state, 'action:', action)
            return {
                ...state,
                todos: [...state.todos, newTodo],
                
            }
            
        default:
            return state;
    }
}