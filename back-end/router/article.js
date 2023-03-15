const express = require('express')
const { getAllArticles, getArticleById, addArticle, updateArticle, deleteArticle } = require('../controller/article')
const auth = require('../middleware/auth')
const articleRouter = express.Router()
multer = require('multer')

let pathParentDir = __dirname.split('/')
pathParentDir.pop()
pathParentDir = pathParentDir.join('/')+"/public/files/images"
console.log(pathParentDir)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, pathParentDir);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});
var upload = multer({storage: storage });

articleRouter.get('/', getAllArticles)
articleRouter.get('/:id', getArticleById)
articleRouter.post('/', auth, upload.single('photo'), addArticle)
articleRouter.put('/:id', auth, updateArticle)
articleRouter.delete('/:id', auth, deleteArticle)

module.exports = articleRouter
