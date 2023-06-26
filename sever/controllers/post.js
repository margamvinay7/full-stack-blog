const postMessage=require('../models/post.js');

const getPosts= async (req,res)=>{
    try{

    const result= await postMessage.find()
    res.status(201).json(result);
   
    }
    catch(err){
        console.log(err)
    }
}

const createPost=async (req,res)=>{
    const {title,message,name,creater}=req.body;
    try{

        const result=await postMessage.create({title,message,name,creater}  )
        res.status(201).json(result)
    }
    catch(err){
        console.log(err)
    }
}
const deletePost =async (req,res)=>{
 const  {id} = req.params;
 try{
    await postMessage.findByIdAndDelete(id)
    res.sendStatus(200)
 }
 catch(err){
    console.log(err)
    res.sendStatus(400)
 }
}
const updatePost=async (req,res)=>{
    const {id}=req.params;
    const {title,message,name,creater}=req.body;
    const updatePost ={creater,title,message,name,_id:id}

    try{
        await postMessage.findByIdAndUpdate(id,updatePost,{new:true})
    }
    catch(err){
        console.log(err)
        res.sendStatus(400)
     }
}
module.exports={getPosts,createPost,deletePost,updatePost};
