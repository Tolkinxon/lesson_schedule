import './css/index.css'
import Main from "./components/Main"
import AddSchedule from './components/AddSchedule'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'

export const MyContext = createContext()


function App() {

  const [num, setNum] = useState(700)
  const [secondOne, setSecondOne] = useState('hello world')


  return (
    <MyContext.Provider value={ {num, secondOne} } secondOne>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/add-schedule' element={ <AddSchedule /> }/>
      </Routes>
    </MyContext.Provider>
  )
}

export default App
