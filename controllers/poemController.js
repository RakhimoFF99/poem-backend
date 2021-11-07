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
        const poem = await Poem.find({categoryId:req.params.id})
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
        const poem = await Poem.find({})
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

