const OrderLine = require("../model/order_line")
const jwt = require('jsonwebtoken');

async function getAllLineFromOrder(req,res) {
    const orderLines = await OrderLine.findAll({ where: [{ id_order: req.params.id }] })
    res.json(orderLines)
}

async function addOrderLine(req, res) {
    if (!req.body.id_art || !req.params.id_order || !req.body.qty || !req.body.price) {
        res.status(400).json({ mess: "Champs obligatoires : id_art, id_order,qty et prix" })
        return
    }
    if (req.user.dataValues.niveau === 1) {
        const orderLine = await OrderLine.create({
            id_art: req.body.id_art,
            id_order: req.params.id_order,
            price: req.body.price,
            qty: req.body.qty,
        });
        res.json(orderLine)
    }
    else {
        res.status(403).json({ mess: "vous devez etre administrateur" })
    }
}

module.exports = {
    getAllLineFromOrder,
    addOrderLine
}