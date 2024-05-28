import './css/index.css'
import Main from "./components/Main"
import AddSchedule from './components/AddSchedule'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Main /> }/>
        <Route path='/add-schedule' element={ <AddSchedule /> }/>
      </Routes>
      
       
    </>
  )
}

export default App
