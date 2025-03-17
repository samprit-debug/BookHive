import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

const Signup = () => {

    
    const { 
        register,
        handleSubmit,  
        formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


  return (
   <>
    <div className='flex h-screen justify-center items-center '>
        <div className="">
            <div className=" w-[400px] border-[2.5px] rounded-lg p-7 shadow-xl border-emerald-500">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link 
              to="/"
             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
             ✕
              </Link>
              
                <h3 className="font-bold text-3xl  ">
                   Sign Up
                </h3>
               <h4 className='py-4 '>
              Name
             </h4>
              <input className='w-80 px-4 py-1 rounded-md bg-slate-700 border text-center ' type="name" placeholder='Enter your full name' {...register("name", { required: true })} />
             <br />
             {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
               <h4 className='py-4 '>
              Email
             </h4>
               <input className='w-80 px-4 py-1 rounded-md bg-slate-700 border text-center ' type="email" placeholder='Enter your email' {...register("email", { required: true })} />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                <h4 className='py-4'>
              Password
                </h4>
              <input className='w-80 px-4 py-1  rounded-md bg-slate-700 border text-center ' type="password" placeholder='Enter your password' {...register("password", { required: true })} />
              <br />
             {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              {/* <br /> this tag is used for line break */}
              
               <div className="flex items-center justify-between w-full mt-4">
                  <button className='block mt-6 mx-28 px-3 py-1 border rounded-lg bg-emerald-700 select-none
                    hover:bg-emerald-950 hover:scale-110 transition duration-300'>
                  Sign Up
                  </button>
               </div>
             </form>
               <div className="flex items-center justify-between w-full mt-8">
                 <h6 className='text-sm'>
                  Have Account?{"  "}
                    <a className='text-blue-400 underline'  onClick={() => document.getElementById("my_modal_3").showModal()} >
                    Login
                    </a>
                    <Login/>
                </h6>
                </div>

                
                
            
               
            </div>
        </div>
    </div>
   </>
  )
}

export default Signup
