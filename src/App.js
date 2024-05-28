import './css/index.css'
import Main from "./components/Main"
import AddSchedule from './components/AddSchedule'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'

export const MyContext = createContext()


function App() {
  const [changibleData, setChangibleDataData] = useState([])


  return (
    <MyContext.Provider value={ { changibleData, setChangibleDataData } } secondOne>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/add-schedule' element={ <AddSchedule /> }/>
      </Routes>
    </MyContext.Provider>
  )
}

export default App
