const mongoose = require('mongoose')

const Naqil_maqallar = mongoose.Schema({
    name:{
        type:String,
    },
    parentId:{
        type:mongoose.Types.ObjectId,
        ref:"Apiwayi_folklorizmler"
    }
})

module.exports = mongoose.model('Naqil_maqallar',Naqil_maqallar)