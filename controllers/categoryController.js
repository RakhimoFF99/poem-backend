const Category = require('../models/category')

exports.add = async (req,res)=>{
    console.log(req.body)
    const category = {
        name: req.body.name
    }
    if(req.body.parentId){
        category.parentId = req.body.parentId
    }
    const cat = new Category(category)
    await cat.save((error, category) => {
        if(error) return console.log(error)
        if(category){
            return res.status(200).json({category})
        }
    })
}

function createCategories (categories, parentId = null){
    const categoryList = []
    let category;
    if(parentId == null){
        category =  categories.filter(cat => cat.parentId == undefined)
    }else {
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for(let cate of category){
        console.log(cate)
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            parentId: cate.parentId,
            children: createCategories(categories, cate._id)
        })
    }
    return categoryList
}

exports.get = async (req,res)=>{
    const cc = await Category.find()
        .populate('parentId')
    res.send(cc)
}
exports.getCategory = async (req, res) => {
    await Category.find({})
        .exec((error, categories) => {
            if(error)  res.status(400).json({error})
            if(categories){
                const categoryList = createCategories(categories)
                res.status(200).json({categoryList })
            }
        })

}
exports.editCategory = async (req,res)=>{
    await Category.updateOne({_id: req.params.id},{$set:req.body},(err,data)=>{
        if(err) return res.status(400).json({success: false})
        res.status(200).json({success: true})
    })
}


    

exports.editNum = async (req,res) => {
    const category = await Category.findByIdAndUpdate({_id: req.params.id})
    category.num = req.body.num
    await category.save({validateBeforeSave: false})
        .then(()=>{
            res.status(200).json({success: true})
        })
        .catch((e)=>{
            res.send(e)
        })
}