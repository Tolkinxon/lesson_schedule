import './css/index.css'
import Main from "./components/Main"
import AddSchedule from './components/AddSchedule'
import { Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { reducer } from './redux/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

function App() {

  return (
    <Provider store={store}>
        <Routes>
            <Route path='/' element={ <Main /> }/>
            <Route path='/add-schedule' element={ <AddSchedule /> }/>
        </Routes>
    </Provider>
  )
}

export default App
