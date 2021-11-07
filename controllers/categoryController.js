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

exports.getCategoryByParentId = async (req,res) => {
   try {
       const category = await Category.find({parentId:req.params.id})
       if(category) {
           res.status(200).json({
               success:true,
               data:category
           })
       }
   }
   catch(e) {
       res.status(400).json({
           success:false,
           message:e
       })
   }
} 
    



    

