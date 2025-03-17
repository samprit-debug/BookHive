import React from 'react'
import book from "../../public/book.jpg"

function Banner() {
  return (
    <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10 '>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32  '>
        <div className='space-y-12'>
        <div>
        <h1 className='text-4xl font-extrabold'> Buzz into the <span className='text-teal-500'>World of Books!</span></h1>
        <h1 className='text-3xl font-semibold'> <span className='text-pink-400 font-bold '>"A digital library"</span> -at your fingertips.</h1>
        </div>
        
        
        <p className='text-lg font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iusto dicta facilis autem repellat possimus? Alias illo veritatis
        et itaque cumque nihil consectetur pariatur fuga enim laudantium recusandae
        expedita excepturi maiores!
        </p>
        <label className="input validator dark:bg-amber-50 dark:text-black dark:border-black ">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
        <input type="email" placeholder="mail@site.com" required/>
       </label>
       
        </div>

        <button className="btn btn-secondary mt-5">Secondary</button>
        </div>
        <div className='order-1 md:order-2 w-full md:w-1/2'>
        <img src={book} className='w-9/12 h-9/12 mx-28 mt-28' alt="no image" />
        </div>
    </div>
    </>
  )
}

export default Banner
