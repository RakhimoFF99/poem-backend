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

// Cascade delete category when a product is deleted
CategorySchema.pre('remove', async function (next) {
    // console.log(`Product being removed from category ${this._id}`);
    await this.model('Product').deleteMany({
        category: this._id
    });
    await this.model('Category').deleteMany({
        parentId: this._id
    });
    next();
});

module.exports = mongoose.model('Category', CategorySchema)
