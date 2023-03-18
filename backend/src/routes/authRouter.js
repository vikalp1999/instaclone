const { register, login, logout, generateAccessToken } = require('../controller/authCtrl')

const router = require('express').Router()

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.post('/refresh_token', generateAccessToken)


module.exports = router