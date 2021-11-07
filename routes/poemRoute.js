const router = require('express').Router()
const {add,getAllPoem,getPoemById} = require('../controllers/poemController')

router.post('/api/poem/add',add)
router.get('/api/poem/:id',getPoemById)
router.get('/api/poem',getAllPoem)

module.exports = router