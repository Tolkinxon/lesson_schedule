export const add = () => ({type: 'ADD'})
export const fetchData = data => ({type:'DATA_FETCHING', payload: data})
export const lengthData = data => ({type:'LENGTH_DATA', payload: data})
export const dataAdding = data => ({type: 'DATA_ADDING', payload: data})