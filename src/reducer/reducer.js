export const reducer = (state, action) => {
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