const router = require('express').Router()

const { createComment, updateComment, likeComment, unLikeComment, deleteComment } = require('../controller/commentCtrl')
const auth = require('../middleware/auth')

router.post('/comment', auth, createComment)

router.patch('/comment/:id', auth, updateComment)

router.patch('/comment/:id/like', auth, likeComment)

router.patch('/comment/:id/unlike', auth, unLikeComment)

router.delete('/comment/:id', auth, deleteComment)



module.exports = router