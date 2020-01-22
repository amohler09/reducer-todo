
    export const initialState = {
        todos: [
        {
            item: 'Unpack boxes',
            completed: false,
            id: 3892987589
        },

        {
            item: 'Walk the dog',
            completed: false,
            id: 3892987590
        },

        {
            item: 'Make dinner',
            completed: false,
            id: 3892987591
        },

        {
            item: 'Do laundry',
            completed: false,
            id: 3892987592
        },

        {
            item: 'Do dishes',
            completed: false,
            id: 3892987593
        }
    ]};

export const todoReducer = (state, action) => {
    console.log('state', state);
    console.log('action', action);
    switch(action.type) {
        case 'TOGGLE_TODO':
            return {
                ...state,
                completed: true
            };
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
        //case 'CLEAR_TODOS':
            // return {
            //     ...state,
            //     state.map(item => {
            //         return item.id === action.payload
            //         ? {...item, completed: !item.completed }
            //         : item;
            //     })
            // }
        
    default:
        return state;
    }

    
}