const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const user =require('../models/user.js')
const secret='whynotsecure'
const signup= async (req,res)=>{
  const  {username,password} = req.body;
  try {
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
  

  const salt=10
  const newUser=await user.findOne({username})
  if(newUser) return res.status(400).json({message:"user is already exists"})
const hashedPassword= await bcrypt.hash(password,salt)
const result= await user.create({username,password:hashedPassword})

  const token =jwt.sign({username:result.username,id:result._id},secret,{expiresIn:"1h"})
  res.status(201).json(token)
  }
  catch(err){
    res.status(501).json({message:"something wrong"})
    console.log(err)
  }

}




module.exports=signup;
