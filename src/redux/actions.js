export const incr = () => ({ type: 'INCREMENT' })
export const decr = () => ({ type: 'DECREMENT' })
export const random = (number) => ({ type: 'RANDOM', payload: number })
