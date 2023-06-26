import React, { useCallback } from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { updatePost } from '../api/index';
import posts from './posts'




const Updatepost = () => {

  const state={title:' ',creater:' ',name:'',message:''}
  const [form,setForm]=useState(state);
 
  const [postTitle,setPostTitle]=useState(" ");
  const [postBody,setPostBody]=useState(" ");
  const [postCreater,setPostCreater]=useState(" ");
  const [postName,setPostName]=useState(" ");
  useEffect((e)=>{
    
  console.log("in use effect")
  
  setForm({title:postTitle,creater:postCreater,message:postBody,name:postName})

  },[postBody,postTitle,postCreater,postName,setForm]
  )
 const id=useSelector((state)=>state.update.id)
 console.log(id)
 const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  const signup= async(formdata,id)=>{
    await updatePost(formdata,id)
  //  .then(res=>{
  //   console.log(res.data)
  //   console.log("hello")

  //  })
  //  .catch(error=>{
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an error
  //     console.log('Error', error.message);
  //   }
  //   console.log(error.config);
    
  //   })


  }
 
  signup(form,id) 
  navigate('/posts') 
}
  return (
  
    <main >
            <h2>{console.log("in return")}</h2>
            <form  onSubmit={handleSubmit} className="grid place-items-center place-content-center  m-44 w-72 p-2 bg-rose-500 bg-opacity-60 rounded-md ">
                <label htmlFor="postTitle">Title:</label>
                <input
                    name="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    className=' m-2 w-52 rounded-md hover: cursor-pointer border border-slate-600 focus:outline-none  focus:border-sky-400 placeholder-orange-400'

                />
                <label htmlFor="postCreater">creater:</label>
                <input
                    name="postCreater"
                    type="text"
                    required
                    value={postCreater}
                    onChange={(e) => setPostCreater(e.target.value)}
                    className=' m-2 w-52 rounded-md hover: cursor-pointer border border-slate-600 focus:outline-none  focus:border-sky-400 placeholder-orange-400'
                />
                <label htmlFor="postName">name:</label>
                <input
                    name="postName"
                    type="text"
                    required
                    value={postName}
                    onChange={(e) => setPostName(e.target.value)}
                   
                    className=' m-2 w-52 rounded-md hover: cursor-pointer border border-slate-600 focus:outline-none  focus:border-sky-400 placeholder-orange-400'
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    name="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    className=' m-2 w-52 rounded-md hover: cursor-pointer border border-slate-600 focus:outline-none  focus:border-sky-400 placeholder-orange-400'
                />
                <button type="submit">Submit</button>
            </form>
        </main>

 
  )
}
export default Updatepost
 
