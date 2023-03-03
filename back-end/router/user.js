const express = require('express')
const { getAllUser, addUser, connectUser } = require('../controller/user')
const auth = require('../middleware/auth')

const userRouter = express.Router()

userRouter.get('/', auth, getAllUser)
userRouter.post('/', addUser)
userRouter.post('/connect', connectUser)

module.exports = userRouter