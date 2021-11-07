const router = require('express').Router()
const {add,getAllPoem,getPoemById,deletePoemById,updatePoemById} = require('../controllers/poemController')

router.post('/api/poem/add',add)
router.get('/api/poem/get/:id',getPoemById)
router.put('/api/poem/edit/:id',updatePoemById)
router.delete('/api/poem/delete/:id',deletePoemById)
router.get('/api/poem/all',getAllPoem)

module.exports = router