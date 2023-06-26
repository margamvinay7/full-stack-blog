import axios from 'axios';
export  const API=axios.create({baseURL:'http://localhost:5500/'});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
    req.headers.Authorization=`Bearer ${(localStorage.getItem("profile"))}`
    }
    return req;
})

export const fetchPost =()=>API.get('/posts')

export const createPost =(formdata)=>API.post('/posts',formdata)
export const deletePost=(id)=>API.delete(`/posts/${id}`)
export const updatePost=(formdata,id)=>API.patch(`/posts/${id}`,formdata)



