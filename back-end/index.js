const express = require('express')
const { sequelize } = require('./data/index');
const articleRouter = require('./router/article');
const userRouter = require('./router/user')
const orderRouter = require('./router/order')
const orderLineRouter = require('./router/order_line')
const app = express()
const port = 3001;

(async () => {
    await sequelize.sync({ force: false });
    // Code here
})();

// app.use(express.static('./public'));
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/article', articleRouter)
app.use('/api/order', orderRouter)
app.use('/api/order_line', orderLineRouter)

app.get('/', (req, res) => {
    res.json({ mess: "hello world!" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})