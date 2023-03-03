const express = require('express')
const { sequelize } = require('./data/index');
const articleRouter = require('./router/article');
const userRouter = require('./router/user')
const app = express()
const port = 3001;

(async () => {
    await sequelize.sync({ force: false });
    // Code here
})();
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/article', articleRouter)

app.get('/', (req, res) => {
    res.json({ mess: "hello world!" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})