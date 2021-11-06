const mongoose = require('mongoose')

const Analitikaliq_folklorizmler = mongoose.Schema({
    name:{
        type:String,
    }
})


module.exports = mongoose.model('Analitikaliq_folklorizmler',Analitikaliq_folklorizmler)