import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

    const { 
      register,
      handleSubmit,  
      formState: { errors } 
    } = useForm();


    const onSubmit = async (data) =>{
      const userInfo ={
        email:data.email,
        password:data.password
      }
      console.log(userInfo)
      await axios.post("http://localhost:4001/user/Login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Login successfull');
          document.getElementById("my_modal_3").close()

          setTimeout(() => {
            window.location.reload()     
            localStorage.setItem("Users", JSON.stringify(res.data.user))
          }, 1000);
        }
       
      })
      .catch((err)=>{
        if(err.response){
          console.log(err);
          toast.error("Error : "+ err.response.data.message);
          setTimeout(() => {}, 2000);
        }
        
    } )
  
    }
      
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-yellow-50 dark:text-slate-950">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={() => document.getElementById("my_modal_3").close()}
      >
        ✕
      </Link>
      <h3 className="font-bold text-xl ">Login</h3>
    <h4 className='py-4'>Email</h4>
    <input className='w-80 px-4 py-1 rounded-md bg-slate-700 border text-center dark:bg-slate-300 dark:border-black ' type="email" placeholder='Enter your email' {...register("email", { required: true })}/>
    <br />
    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    <h4 className='py-4'>Password</h4>
    <input className='w-80 px-4 py-1 rounded-md bg-slate-700 border text-center dark:bg-slate-300 dark:border-black' type="password" placeholder='Enter your password' {...register("password", { required: true })} />
    <br />
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    {/* <br /> this tag is used for line break */}
    <div className="flex items-center justify-between w-full mt-4">
    <button className='block mt-6 mx-28 px-3 py-1 border rounded-lg bg-emerald-700 select-none
     hover:bg-emerald-950 hover:scale-110 transition duration-300 dark:text-white'>
        Login
    </button>
    <h6 className='text-sm'>Not registered?<a className='text-blue-500 underline' href="/signup"> Signup</a></h6>
    
 
    </div>

    </form>
   

  </div>
  
</dialog>
    </div>
  )
}

export default Login
