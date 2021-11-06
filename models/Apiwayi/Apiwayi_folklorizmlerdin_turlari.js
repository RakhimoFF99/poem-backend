const mongoose = require('mongoose')

const Apiwayi_folklorizmlerdin_turlari = mongoose.Schema({
    name:{
        type:String,
    },
    parentId:{
        type:mongoose.Types.ObjectId,
        ref:"Apiwayi_folklorizmler"
    }
})

module.exports = mongoose.model('Apiwayi_folklorizmlerdin_turlari',Apiwayi_folklorizmlerdin_turlari)