const mongoose = require('mongoose')

const Apiwayi_folklorizmler = mongoose.Schema({
    name:{
        type:String,
    }
})


module.exports = mongoose.model('Apiwayi_folklorizmler',Apiwayi_folklorizmler)