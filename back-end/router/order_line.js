const express = require('express')
const { getAllLineFromOrder, addOrderLine } = require('../controller/order_line')
const auth = require('../middleware/auth')

const orderRouter = express.Router()

orderRouter.get('/:id', getAllLineFromOrder)
orderRouter.post('/:id', auth, addOrderLine)

module.exports = orderRouter
