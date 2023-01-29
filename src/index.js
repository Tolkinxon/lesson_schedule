import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import { createStore } from 'redux'

const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 2
    case 'DECREMENT':
      return state - 1
    case 'RANDOM':
      return state = action.payload 

    default:
      return state
  }
}
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

store.subscribe(() => {
  document.getElementById('counter').textContent = store.getState()
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
})

document.getElementById('random').addEventListener('click', () => {
  const randomCalculate = Math.floor(Math.random() * 10)
  store.dispatch({type: 'RANDOM', payload: randomCalculate})
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
