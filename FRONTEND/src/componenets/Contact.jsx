import React from 'react'

import { useForm } from "react-hook-form";

const Contact = () => {

      const { 
          register,
          handleSubmit,  
          formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);


  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)} method='dialog'>
    <div className='flex h-screen justify-center items-center '>
        <div className='w-[400px] border-[3.5px] border-pink-400 rounded-lg p-7 space-y-5 '>
            <h2 className='text-amber-50 font-bold  text-3xl dark:bg-yellow-50 dark:text-black'>Contact Us</h2>
            <h4 className='text-lg font-semibold'>Name</h4>
            <input className='dark:bg-slate-300 dark:text-black dark:border-[2.5px] px-4 py-1 rounded-lg dark:border-slate-500' type="name" placeholder='enter your name' {...register("name", { required: true })}/>
            <br/>
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            <h4 className='text-lg font-semibold'>Email</h4>
            <input className='dark:bg-slate-300 dark:text-black dark:border-[2.5px] px-4 py-1 rounded-lg dark:border-slate-500' type="email" placeholder='enter your email' {...register("email", { required: true })}/>
            <br />
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            <h4 className='text-lg font-semibold'>Message</h4>
            <input className='dark:bg-slate-300 dark:text-black dark:border-[2.5px] px-4 py-1 rounded-lg dark:border-slate-500' type="text" placeholder='type your message' {...register("message", { required: true })}/>
            <br />
            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
    
        </div>
    </div>
   
    <div className='flex items-center justify-center mb-16 '>
      <button className='px-3 py-1  rounded-md bg-emerald-400 hover:bg-emerald-800 border dark:border-black' onClick={()=>console.log("submitted")}>Submit</button>
    </div>
    
    </form>
    


    </>
  )
}

export default Contact
