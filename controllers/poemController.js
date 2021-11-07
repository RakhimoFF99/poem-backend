const Poem = require('../models/poem')

exports.add = async (req,res) => {
    try {
        const poem = await new Poem(req.body)
        const result  = await poem.save()
        if(result) {
            res.status(201).json({
                success:true,
                data:result
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
exports.getPoemById = async (req,res) => {
    try {
        const poem = await Poem.find({categoryId:req.params.id}).populate('categoryId')
        if(poem) {
            res.status(200).json({
                success:true,
                data:poem
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
exports.getAllPoem  = async (req,res) => {
    try {
        const poem = await Poem.find({}).populate('categoryId')
        if(poem) {
            res.status(200).json({
                success:false,
                data:poem
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
exports.updatePoemById = async (req,res) => {
    try {
        const poem = await Poem.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        if(poem) {
            res.status(200).json({
                success:true,
                data:poem
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

exports.deletePoemById = async (req,res) => {
    try {
        const poem = await Poem.findByIdAndDelete(req.params.id)
        if(poem) {
            res.status(200).json({
                success:true,
                data:poem
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
