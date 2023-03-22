const express = require('express')
const { sequelize } = require('./data/index');
const articleRouter = require('./router/article');
const userRouter = require('./router/user')
const orderRouter = require('./router/order')
const orderLineRouter = require('./router/order_line')

const stripe = require('stripe')('sk_test_51MoC00AAUAQGM3dyqLAJ7tgc05c32onteMPyI2SO2MaYQCHdwra8YuGB5h4jhC7CCSy7HYTN5s8JwFDyhzTNubpz00R02oxhOz');

const app = express()
const port = 3001;

(async () => {
    await sequelize.sync({ force: false });
    // Code here
})();

app.use(express.static('public'));
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/article', articleRouter)
app.use('/api/order', orderRouter)
app.use('/api/order_line', orderLineRouter)

app.get('/', (req, res) => {
    res.json({ mess: "hello world!" })
})

app.get("/config", (req, res) => {
    res.send({
        publishableKey: 'pk_test_51MoC00AAUAQGM3dyq3ZkxAesOiV9m4Sj9LBxYLvrrDNpB9OYNjEqbIbT2HiKU5kimW7uFPrZhzhbVmLmmZsjrq8K00M3DEjsCH',
    });
});

app.post("/create-payment-intent", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "EUR",
            amount: req.body.payAmount,
            automatic_payment_methods: { enabled: true },
        });
        console.log('amount')
        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                message: e.message,
            },
        });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})