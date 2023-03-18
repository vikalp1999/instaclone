const router = require('express').Router()
const { createNotify, removeNotify, getNotifies, isReadNotify, deleteAllNotifies } = require('../controller/notifyCtrl')
const auth = require('../middleware/auth')


router.post('/notify', auth, createNotify)

router.delete('/notify/:id', auth, removeNotify)

router.get('/notifies', auth, getNotifies)

router.patch('/isReadNotify/:id', auth, isReadNotify)

router.delete('/deleteAllNotify', auth, deleteAllNotifies)



module.exports = router