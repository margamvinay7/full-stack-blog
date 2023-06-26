const jwt =require('jsonwebtoken')

const secret='whynotsecure'
const auth=async(req,res,next)=>{
    try{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        console.log(token)
        decodedData=jwt.verify(token,secret);
        req.userId=decodedData?.id;
        console.log("verified")
        next();

    }
    else{
       return res.status(400).send(unauthorized)
    }
}
catch(err){
    
   res.status(401).json({message:"unauthorized"})
   console.log("not verified")
}

}
module.exports=auth