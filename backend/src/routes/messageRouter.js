const router = require('express').Router()

const { createMessage, getConversations, getMessages, deleteMessages, deleteConversation } = require('../controller/messageCtrl')
const auth = require('../middleware/auth')

router.post('/message', auth, createMessage)

router.get('/conversations', auth, getConversations)

router.get('/message/:id', auth,getMessages)

router.delete('/message/:id', auth, deleteMessages)

router.delete('/conversation/:id', auth, deleteConversation)


module.exports = router