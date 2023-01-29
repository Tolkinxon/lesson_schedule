export const incr = () => ({ type: 'INCREMENT' })
export const decr = () => ({ type: 'DECREMENT' })
export const random = () => ({ type: 'RANDOM', payload: Math.floor(Math.random() * 10) })
