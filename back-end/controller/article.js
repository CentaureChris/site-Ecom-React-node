const Article = require("../model/article");
const jwt = require('jsonwebtoken');

async function getAllArticles(req, res) {
    const articles = await Article.findAll();
    res.json(articles)
}

async function getArticleById(req, res) {
    const article = await Article.findByPk(req.params.id);
    res.json(article)
}

async function addArticle(req, res) {
    console.log(req)
    if (!req.body.nom || !req.body.description || !req.body.prix) {
        res.status(400).json({ mess: "Champs obligatoires : nom, description et prix"})
        return
    }
    if (req.user.dataValues.niveau === 1) {
        const article = await Article.create({
            nom: req.body.nom,
            description: req.body.description,
            prix: req.body.prix,
            photo: req.file.filename
        });
        res.json(article)
    }
    else {
        res.status(403).json({ mess: "vous devez etre administrateur" })
    }

//     if(req.files){
//         res.json({ message: "Successfully uploaded files" })
//     }else {
//         res.json({ message: "Fail upload" })
//     }
}

async function updateArticle(req, res) {
    if (!req.body.nom || !req.body.description || !req.body.prix) {
        res.status(400).json({ mess: "Champs obligatoires : nom, description et prix" })
        return
    }
    if (req.user.dataValues.niveau === 1) {

        const article = await Article.findByPk(req.params.id);
        article.nom = req.body.nom
        article.description = req.body.description
        article.prix = req.body.prix
        if (req.body.photo) article.photo = req.body.photo
        article.save()
        res.json(article)
    }
    else {
        res.status(403).json({ mess: "vous devez etre administrateur" })
    }
}

async function deleteArticle(req, res) {
    if (req.user.dataValues.niveau === 1) {

        const article = await Article.findByPk(req.params.id);
        article.destroy()
        res.json({ mess: "article supprimé" })
    }
    else {
        res.status(403).json({ mess: "vous devez etre administrateur" })
    }
}

module.exports = {
    getAllArticles,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle
}