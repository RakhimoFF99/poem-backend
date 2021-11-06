const mongoose = require('mongoose')

const Xaliq_qosiqlari = mongoose.Schema({
    name:{
        type:String,
    },
    parentId:{
        type:mongoose.Types.ObjectId,
        ref:"Analitikaliq_folklorizmler"
    }
})

module.exports = mongoose.model('Xaliq_qosiqlari',Xaliq_qosiqlari)