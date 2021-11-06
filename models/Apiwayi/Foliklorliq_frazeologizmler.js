const mongoose = require('mongoose')

const Foliklorliq_frazeologizmler = mongoose.Schema({
    name:{
        type:String,
    },
    parentId:{
        type:mongoose.Types.ObjectId,
        ref:"Apiwayi_folklorizmler"
    }
})

module.exports = mongoose.model('Foliklorliq_frazeologizmler',Foliklorliq_frazeologizmler)