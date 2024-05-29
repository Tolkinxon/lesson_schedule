export const add = () => ({type: 'ADD'})
export const fetchData = data => ({type:'DATA_FETCHING', payload: data})
export const findTime = data => ({type:'FIND_TIME', payload: data})
export const dataAdding = data => ({type: 'DATA_ADDING', payload: data})