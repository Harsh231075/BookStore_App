import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import PaidCourse from './course/PaidCourse'
import Singup from './component/Singup'

function App() {
  return (<>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<PaidCourse></PaidCourse>} />
        <Route path='/signup' element={<Singup></Singup>} />
      </Routes>
    </div>
  </>
  )
}

export default App
