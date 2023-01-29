import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import reducer from './redux/reduser'
import { Provider } from 'react-redux'

const learn = () => {
  // const store = createStore(reducer)
  // const {dispatch, getState, subscribe} = store
  // subscribe(() => {
  //   document.getElementById('counter').textContent = getState().value
  // })
  // const { incr, decr, random } = bindActionCreators(actions, dispatch)
  // const { incrHandler, decrHandler, randomHandler } = bindActionCreators({
  //   incrHandler: incr,
  //   decrHandler: decr,
  //   randomHandler: random
  // }, dispatch)
  // const actionCreator = (action, dispatch) => (...args) => {
  //   dispatch(action(...args))
  // }
  //  const incrHandler = actionCreator(incr, dispatch)
  //  const decrHandler = actionCreator(decr, dispatch)
  //  const randomHandler = actionCreator(random, dispatch)
  //  const incrHandler = () => dispatch(incr())
  //  const decrHandler = () => dispatch(decr())
  //  const randomHandler = (num) => dispatch(random(num))
  // document.getElementById('increment').addEventListener('click',  incr)
  // document.getElementById('decrement').addEventListener('click', decr)
  // document.getElementById('random').addEventListener('click', () => {
  //   const randomCalculate = Math.floor(Math.random() * 10)
  //   random(randomCalculate)
  // })
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
