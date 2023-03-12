const Order = require("../model/order")
const jwt = require('jsonwebtoken');

async function getAllOrders(req, res) {
    const orders = await Order.findAll()
    res.json(orders)
}

async function addOrder(req, res) {
    if (!req.body.id_user || !req.body.amount ) {
        res.status(400).json({ mess: "Champs obligatoires : user_id, montant " })
        return
    }

    const order = await Order.create({
        id_user: req.body.id_user,
        amount: req.body.amount,
        state: req.body.state,
    });
    res.json(order)

}

module.exports = {
    getAllOrders,
    addOrder
}