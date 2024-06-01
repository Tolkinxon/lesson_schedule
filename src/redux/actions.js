export const add = () => ({type: 'ADD'})
export const fetchData = data => ({type:'DATA_FETCHING', payload: data})
export const timeLessonFetchData = data => ({type:'TIME_LESSON_DATA_FETCHING', payload: data})
export const setFindTime = data => ({type:'FIND_TIME', payload: data})
export const setFindDay = data => ({type:'FIND_DAY', payload: data})
export const setFindOddOrEven = data => ({type:'FIND_ODD_OR_EVEN', payload: data})
export const setFindId = data => ({type:'FIND_ID', payload: data})
export const dataAdding = data => ({type: 'DATA_ADDING', payload: data})
export const dataEditing = (data, idx) => ({type: 'DATA_EDITING', payload: {data, idx}})