import React from 'react'
import Navbar from '../componenets/Navbar'
import Course from '../componenets/Course'
import Footer from '../componenets/Footer'


const Courses = () => {
    
  return (
    <>
    <div className='dark:bg-yellow-50 dark:text-black'>
    <Navbar/>
    <div className='min-h-screen '>
    <Course/>
    </div>
    <Footer/>
    </div>

    </>
  )
}

export default Courses
