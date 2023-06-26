import React from 'react'
import {deletePost,fetchPost} from '../api/index'
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { updateActions } from '../store/updateSlice'

import App from '../App'

import Updatepost from './updatePost'

const Posts = () => {
  
 
 const [posts,setPosts] =useState([])
 useEffect(()=>{
  const fetchPosts=async()=>{
    try{
      const response=await fetchPost()
      setPosts(response.data);
    }
    catch(error){
      console.log(error)
    }
  }
  fetchPosts();
 },[posts])
 const dispatch=useDispatch();
 const  handleClick=async (id)=>{
  await deletePost(id)
 }
 const navigate=useNavigate()
 const handleUpdate=(id)=>{
 console.log("in posts from parent",id)
 dispatch(updateActions.update(id))
  navigate('/updatePost')

 
 }
 const user=localStorage.getItem("profile")


 
 
  return (
    <div>
      {/*.btn{
  display: flex;
  width: 40%;
  margin: 2px;
  padding: 10px;
  position: relative;
  bottom:0px;
 
 background-color: rgba(255, 255, 255, 0);
 
  justify-content:space-around;
}
.deletebtn{
  cursor: pointer;
 border: 0px;
 border-radius: 20px;
 background-color: rgba(19, 79, 168, 0.66);
  
  bottom: 5px;
}
.updatebtn{
  cursor: pointer;
  border: 0px;
  border-radius: 20px;
  background-color:  rgba(19, 79, 168, 0.66);
  
  bottom: 5px;
  
}
.createbtn{
  cursor: pointer;
  border: 0px;
  border-radius: 20px;
  background-color:  rgba(19, 79, 168, 0.66);
}
        */}
     <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {posts?.map((post,index)=>(
        
            <div key={`${post._id}`} className=' h-fit m-2 p-2 border-2 border-gray-500'>
               
              
              <div >TITLE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{post.title}</div>
              <div >CREATER&nbsp;&nbsp;&nbsp;:{post.creater}</div>
              <div >NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{post.name}</div>
              <div >MESSAGE&nbsp;&nbsp;:{post.message}</div>
              
              {user &&
              <div className='flex justify-between'>
                
              <button  className=' cursor-pointer  border-2 rounded-xl bg-green-100 border-blue-900'onClick={()=>handleClick(post._id)} >&nbsp;deletePost&nbsp;</button>
              <button  className=' cursor-pointer  border-2 rounded-xl bg-green-100 border-blue-900'onClick={()=>handleUpdate(post._id)} >&nbsp;updatePost&nbsp;</button>
              </div>
}
            </div>
            
          
        )
        

        )}
        </main>
        
    </div>
  )

}
export default Posts

/*import React, { useEffect, useState } from 'react';
import { API } from '../api/index';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {console.log("posts is", posts)}
      {posts?.map((post) => (
        <div key={post.id}>
          <div>posts is {post.title}</div>
          <div>{post.creator}</div>
          <div>{post.name}</div>
          <div>{post.message}</div>
          <button>Delete Post</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;*/
