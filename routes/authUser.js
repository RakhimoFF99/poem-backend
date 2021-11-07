const {Router}  = require('express')
const {auth,getUserData,addUser} = require('../controllers/userController')
const verifyToken = require('../middlewars/verifyToken')
const router = Router()

router.post('/api/login',auth)
router.get('/api/get/user/me',verifyToken,getUserData)
router.post('/api/register',addUser)
module.exports = router