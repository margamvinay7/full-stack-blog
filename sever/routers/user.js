const express =require('express')
const router=express.Router();
const signup =require('../controllers/auth.js')
const signin=require('../controllers/auth.js')
router.get('/',(req,res)=>{
    res.send('hello')
})

router.post('/signup',signup)

module.exports=router;
