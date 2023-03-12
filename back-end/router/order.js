const express = require('express')
const { getAllOrders, addOrder } = require('../controller/order')
const auth = require('../middleware/auth')

const orderRouter = express.Router()

orderRouter.get('/', getAllOrders)
orderRouter.post('/', auth, addOrder)

module.exports = orderRouter
