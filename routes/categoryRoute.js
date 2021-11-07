const router = require('express').Router()
const {add,getCategory,get}  = require('../controllers/categoryController')

router.post('/api/category/add',add)
router.get('/api/category/get',getCategory)
router.get('/api/category/getCategories',get)

module.exports = router