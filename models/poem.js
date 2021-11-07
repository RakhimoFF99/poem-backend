const mongoose = require('mongoose')


const poemSchema = mongoose.Schema({
    title:{
        type:String
    },
    poem:{
        type:String
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId
        ref:"Category"
    }
},{
    timestamp:true
})