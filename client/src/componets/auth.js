import React from 'react'

import {API} from '../api/index'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const state={username:' ',password:null}
  const [form,setForm]=useState(state);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const navigate=useNavigate();
  

    const handleSubmit=(e)=>{
        e.preventDefault()
        const signup= async(formdata)=>{
          await API.post('/user/signup',formdata)
         .then(res=>{
          console.log(res.data)
          localStorage.setItem("profile",res.data)
          navigate('/Posts')
         

         })
         .catch(error=>{
          if (error.response) {
            // The request was made and the server responded with a status code
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error', error.message);
          }
          console.log(error.config);
          
          })
      
      
        }
        signup(form)
    
    }
  return (
    <main className='flex justify-center '>
   
    
    <div className=' bg-amber-200 rounded-3xl  box-border max-w-sm min-h-90 grid place-content-center m-28 '>
        <form className='grid place-items-center'   onSubmit={handleSubmit}>
            <div className=' bg-purple-500 rounded-sm w-14 grid place-items-center '>signup</div>
            <div className=" grid place-items-center">

            <input name="username" required   onChange={handleChange} className=' w-80 m-2 h-10 rounded-sm hover:cursor-pointer  hover:bg-lime-300'/>
           
            <input name="password" required  onChange={handleChange} className=' w-80 m-2 h-10 rounded-sm hover:cursor-pointer hover:bg-lime-300'/>
            </div>
            <button  className=' rounded-lg bg-green-400 w-14' type="submit">submit</button>
        </form>
   </div>
   
   
   </main>
   

   
  )
}

export default Auth



