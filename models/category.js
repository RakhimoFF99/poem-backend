const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    name: {
        type:String
    },
    parentId: {
        type: String,
    },
    type:{
        type:Number
    }
    
}, {
    timestamps: true
})



module.exports = mongoose.model('Category', CategorySchema)
