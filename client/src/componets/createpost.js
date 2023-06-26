// import React, { useCallback } from 'react'
// import { useState,useEffect } from 'react';
// import  {API} from '../api/index'

// const Createpost = () => {
//   const state={title:' ',creater:' ',name:'',message:''}
//   const [form,setForm]=useState(state);
//   const {title,creater,name,message}=form;
 
 
//   useEffect((e)=>{
    
//   console.log("in use effect")

//   },[message,title,name,creater]
//   )
//   const handleChange=(e)=>{
//     const {name,value}=e.target;
//     setForm((prevForm)=>({...prevForm,[name]:value}))
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault()
    
//   const signup= async(formdata)=>{
//     await API.post('/posts',formdata)
//    .then(res=>{
//     console.log(res.data)

//    })
//    .catch(error=>{
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an error
//       console.log('Error', error.message);
//     }
//     console.log(error.config);
    
//     })


//   }
  
//   signup(form)

   
    
    
   
   
// }




//   return (
  
//     <main >
//             <h2>{console.log("in return")}</h2>
//             <form  onSubmit={handleSubmit} className="createPost">
//                 <label htmlFor="title">Title:</label>
//                 <input
//                     name="title"
//                     type="text"
//                     required
//                     value={title}
//                     onChange={handleChange}
//                     className='createField'

//                 />
//                 <label htmlFor="creater">creater:</label>
//                 <input
//                     name="creater"
//                     type="text"
//                     required
//                     value={creater}
//                     onChange={handleChange}
//                     className='createField'
//                 />
//                 <label htmlFor="name">name:</label>
//                 <input
//                     name="name"
//                     type="text"
//                     required
//                     value={name}
//                     onChange={handleChange}
                   
//                     className='createField'
//                 />
//                 <label htmlFor="message">Post:</label>
//                 <textarea
//                     name="message"
//                     required
//                     value={message}
//                     onChange={handleChange}
//                     className='createField'
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </main>

 
//   )
// }
// export default Createpost
/*import React, { useEffect,useState } from 'react';
import { API } from '../api/index';

const Createpost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postCreater, setPostCreater] = useState('');
  const [postName, setPostName] = useState('');

  useEffect(() => {
    console.log('in use effect');
  }, [postBody, postTitle, postCreater, postName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = {
        title: postTitle,
        creater: postCreater,
        name: postName,
        message: postBody
      };

      const response = await API.post('/posts', formdata);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };

  return (
    <main>
      <h2>{console.log('in return')}</h2>
      <form onSubmit={handleSubmit} className="createPost">
        <label htmlFor="postTitle">Title:</label>
        <input
          name="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="createField"
        />
        <label htmlFor="postCreater">Creator:</label>
        <input
          name="postCreater"
          type="text"
          required
          value={postCreater}
          onChange={(e) => setPostCreater(e.target.value)}
          className="createField"
        />
        <label htmlFor="postName">Name:</label>
        <input
          name="postName"
          type="text"
          required
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
          className="createField"
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          name="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          className="createField"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Createpost;*/

import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { createPost } from '../api/index'; 


  const Createpost = () => {
   
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
 const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  const signup= async(formdata)=>{
    await createPost(formdata)
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
   signup(form)  
   navigate('/posts')
  
  }

  return (
  
    <main className='grid place-items-center'>
      {/* .createPost{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px;
  padding: 5px;
}
.createField{
  margin: 10px;
  width: 40%;
  



}
.createField:hover{
  cursor: pointer;
  border-radius: 10px;

} */}
     
            <h2>{console.log("in return")}</h2>
            <form  onSubmit={handleSubmit} className="grid place-items-center place-content-center  m-44 w-72 p-2 bg-rose-500 bg-opacity-60 rounded-md  ">
                <label htmlFor="postTitle">Title:</label>
                <input
                    name="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="hello"
                    className=' m-2 w-52 rounded-md hover: cursor-pointer border border-slate-600 focus:outline-none  focus:border-sky-400 placeholder-orange-400 '

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
                    className=' m-2 w-52  rounded-md hover: cursor-pointer border border-slate-600 focus:outline-none  focus:border-sky-400 placeholder-orange-400'
                />
                <button type="submit" className=' bg-green-400 w-fit  m-1 rounded-md'>&nbsp;Submit&nbsp;</button>
            </form>
        </main>

 
  )
}
export default Createpost;


