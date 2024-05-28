const initialState = {
    add: 400
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                add: state.add + 1
            }
        default: 
            return {
                ...state
            }
    }
}