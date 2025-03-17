import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Login = () => {

    const { register,

        handleSubmit,  
        formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}
      >
        ✕
      </Link>
      <h3 className="font-bold text-xl">Login</h3>
    <h4 className='py-4'>Email</h4>
    <input className='w-80 px-4 py-1 rounded-md bg-slate-700 border text-center' type="email" placeholder='Enter your email' {...register("email", { required: true })}/>
    <br />
    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    <h4 className='py-4'>Password</h4>
    <input className='w-80 px-4 py-1 rounded-md bg-slate-700 border text-center' type="password" placeholder='Enter your password' {...register("password", { required: true })} />
    <br />
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    {/* <br /> this tag is used for line break */}
    <div className="flex items-center justify-between w-full mt-4">
    <button className='block mt-6 mx-28 px-3 py-1 border rounded-lg bg-emerald-700 select-none
     hover:bg-emerald-950 hover:scale-110 transition duration-300'>
        Login
    </button>
    <h6 className='text-sm'>Not registered?<a className='text-blue-400 underline' href="/signup"> Signup</a></h6>
    
 
    </div>

    </form>
   

  </div>
  
</dialog>
    </div>
  )
}

export default Login
