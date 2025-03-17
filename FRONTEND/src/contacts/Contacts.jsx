import React from 'react'
import Footer from '../componenets/Footer'
import Contact from '../componenets/Contact'
import Navbar from '../componenets/Navbar'

const Contacts = () => {
  return (
    <>
    <div className='dark:bg-yellow-50 dark:text-black'>
    <Navbar/>
    <div className='min-h-screen'>
      <Contact/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Contacts
