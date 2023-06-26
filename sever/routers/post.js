const express=require('express')
const router=express.Router();
const {getPosts,createPost,deletePost,updatePost}=require('../controllers/post')
const auth =require('../middleware/auth.js')
 
    router.get('/',getPosts)
    router.use(auth)
    router.post('/',createPost)
    router.delete('/:id',deletePost)
    router.patch('/:id',updatePost)
    module.exports=router;