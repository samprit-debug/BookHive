import React from 'react'
import Home from './home/Home'
import Course from './componenets/Course'
import { Route, Router, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './componenets/Signup'
import Contacts from './contacts/Contacts'

const App = () => {
  return (
    <>
    <div className='dark:bg-yellow-50 dark:text-slate-950'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={<Courses/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/contact' element={<Contacts/>} />
    </Routes>
    </div>
    </>

  )
}

export default App
