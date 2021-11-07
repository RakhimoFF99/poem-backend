const mongoose = require('mongoose')


const poemSchema = mongoose.Schema({
    name:{
        type:String
    },
    poem:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
},{
    timestamp:true
})

module.exports = mongoose.model('Poem',poemSchema)