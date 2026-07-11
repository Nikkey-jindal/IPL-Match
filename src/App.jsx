import { useEffect, useState } from 'react'
import './App.css'
import Home from './assets/component/Home'
import { Route, Routes } from 'react-router-dom'
import Matchdetails from './assets/component/Matchdetail'
import Navbar from './assets/component/Navbar'
import Pointstable from './assets/component/Pointstable'
import News from './assets/component/News'
import STATS from './assets/component/STATS'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar/>}>
 <Route path='/' element={<Home/>}></Route>
 <Route path='/Pointstable' element={<Pointstable/>}></Route>
 <Route path='/News' element={<News/>}></Route>
 <Route path='/STATS' element={<STATS/>}></Route>
      </Route>
     
      {/* <Route path='/Matchdetails/:id' element={<Matchdetails/>}></Route> */}
      
    </Routes>

    </>
  )
}

export default App
