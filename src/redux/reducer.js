const initialState = {
    lessonTime: '',
    staticData: [],
    lengthData: -1
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FIND_TIME':
            return {
                ...state,
                lengthData: action.payload
            }
        
        case "DATA_FETCHING":
            return {
                ...state,
                staticData: action.payload
            }
        case "DATA_ADDING":
            const newArr = [action.payload, ...state.staticData]
            return {
                ...state,
                staticData: newArr
            }
        default: 
            return {
                ...state
            }
    }
}