import { useState } from 'react'
import './App.css'
import Text from './components/Text'
import Navbar1 from './components/Navbar1'
import Second from './components/Second'
import { Route, Routes } from 'react-router-dom'
import First2 from './components/First2'
import First from './components/First'
import Table1 from './components/Table1'
import Reactcard from './components/Reactcard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar1/>
      
      <Routes>
       
        <Route path='/' element={<First data={{name:"ttt",age:"10"}}/>}/>
        <Route path='/s' element={<First2/>}/>
        <Route path='/t' element={<Text/>}/>
        <Route path='/v' element={<Table1/>}/>
        <Route path='/x' element={<Reactcard/>}/>
      </Routes>
    </>
  )
}

export default App
