const initialState = {
    add: 400,
    staticData: []
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                add: state.add + 1
            }
        
        case "DATA":
            return {
                ...state,
                staticData: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}