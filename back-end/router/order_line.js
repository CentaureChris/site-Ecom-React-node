const express = require('express')
const { getAllLineFromOrder, addOrderLine } = require('../controller/order_line')
const auth = require('../middleware/auth')

const orderLineRouter = express.Router()

orderLineRouter.get('/:id', getAllLineFromOrder)
orderLineRouter.post('/', auth, addOrderLine)

module.exports = orderLineRouter

