const initialState = {
    staticData: [],
    timeLessonObj: {},
    findTime: -1,
    findOddOrEven: '',
    findId: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FIND_TIME':
            return {
                ...state,
                findTime: action.payload
            }
        case 'FIND_ODD_OR_EVEN':
            return {
                ...state,
                findOddOrEven: action.payload
            }
        case 'FIND_ID':
            return {
                ...state,
                findId: action.payload
            }
        
        case "DATA_FETCHING":
            return {
                ...state,
                staticData: action.payload
            }
            
        case "TIME_LESSON_DATA_FETCHING":
            return {
                ...state,
                timeLessonObj: action.payload
            }
        case "DATA_ADDING":
            const newArr = [action.payload, ...state.staticData]
            return {
                ...state,
                staticData: newArr
            }
        case "DATA_EDITING":
            state.staticData[action.payload.idx] = action.payload.data
            return {
                ...state,
                staticData: state.staticData.filter(item => item !== null)
            }
        default: 
            return {
                ...state
            }
    }
}