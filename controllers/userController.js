const UserModel = require('../models/user')
const config = require('config')
const jwt = require('jsonwebtoken')

exports.auth = async function (req, res) {
    console.log(req.body)
    if(!req.body.userName && !req.body.password) {
    return res.status(400).json({
        success:false,
        message:"Malumotlarni to'liq kiriting"
    })
    }
    try {
        const user = await UserModel.findOne({userName:req.body.userName}) 
            if(!user) {
                return res.status(400).json({
                    success:false,
                    message:"Login yoki parol  notogri"
                })
            }

            if(user.password == req.body.password) {
             const token = await jwt.sign({id:user._id}, "2252534elyor")
            res.header('authorization',token).json({success:true,token}) 
            }
            else {
                res.status(400).json(
                    {
                        success:false,
                        message:"Login yoki parol notogri"
                    }
                )
            }
        
        
    }

    catch(e) {
         res.status(400).json({
             success:false,
             message:e
         })
    }
}
exports.getUserData = async (req,res) => {
   const user = await UserModel.findById(req.user.id)
   res.status(200).json({
       success:true,
       data:user
   })
}

exports.addUser =  async function (req,res) {
    console.log(req.body)
    try {
        const user = await new UserModel({
            userName:req.body.userName,
            name:req.body.name,
            password:req.body.password,
    
        })
      const response = await user.save()
      res.status(200).json({
          success:true,
          data:user
      })
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e
        })
    }
   
}

