const User = require("../model/user");
const jwt = require('jsonwebtoken');

async function getAllUser(req, res) {
    const users = await User.findAll();
    res.json(users)
}
async function addUser(req, res) {
    if (!req.body.email || !req.body.pass) {
        res.status(400).json({ mess: "Champs obligatoires : email et pass" })
        return
    }
    const user = await User.create({
        email: req.body.email,
        pass: req.body.pass,
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        code_postal: req.body.code_postal,
        ville: req.body.ville,
    });
    res.json(user)
}
async function connectUser(req, res) {
    if (!req.body.email || !req.body.pass) {
        res.status(400).json({ mess: "Champs obligatoires : email et pass" })
        return
    }
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user || user.pass != req.body.pass) {
        res.status(403).json({ mess: "utilisateur ou mot de passe incorrect" })
        return
    }
    var token = jwt.sign({ ...user }, 'ma cle');
    res.json({ token,user })
}
module.exports = { getAllUser, addUser, connectUser }