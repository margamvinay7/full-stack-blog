const express =  require('express');
const mongoose = require('mongoose')
const app=express();
const port =5500;
const postRouter= require('./routers/post.js')
const userRouter=require('./routers/user.js')
const cors=require('cors')



app.use(cors(
    {
        origin:"*",
      
    }
))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/posts',postRouter)
app.use('/user',userRouter)
app.get('/',(req,res)=>{
    res.send('hello') 
})


CONNECTION_URL='mongodb+srv://margamvinay:password@vinay.tch0oea.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL,{useUnifiedTopology : true,useNewUrlParser: true }).then(
    app.listen(port,()=>{
        console.log("db is connected")
        console.log(`server is running on ${port}`)
       
    })
).catch((err)=>console.log(err))
