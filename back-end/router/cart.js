const express = require('express')
// const { getAllArticles, getArticleById, addArticle, updateArticle, deleteArticle } = require('../controller/article')
const auth = require('../middleware/auth')

const panierRouter = express.Router()

panierRouter.get('/:id', getArticleById)

module.exports = panierRouter