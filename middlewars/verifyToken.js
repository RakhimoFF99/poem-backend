const jwt = require('jsonwebtoken')
module.exports =  async function (req,res,next) {
    const token = req.header('authorization')

    
    if (!token) {
        return  res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }
    
 try {
    const user = await jwt.verify(token.split(' ')[1],'2252534elyor')

     req.user = user
    next()
 }
 catch(e) {
     res.status(400).json({
         success:false,
         message:"Invalid token"
     })
 }

    
    
}