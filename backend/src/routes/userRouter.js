const router = require('express').Router()
const { searchUser, getUser, follow, unfollow, suggestionsUser, updateUser } = require('../controller/userCtrl')
const auth = require("../middleware/auth")



router.get('/search', auth, searchUser)

router.get('/user/:id', auth,getUser)

router.patch('/user', auth, updateUser)

router.patch('/user/:id/follow', auth, follow)
router.patch('/user/:id/unfollow', auth, unfollow)

router.get('/suggestionsUser', auth, suggestionsUser)



module.exports = router