import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'
const app = express()

app.use(cors({
    origin: true
}))

app.use(express.json())

const stripe = Stripe('--YOUR STRIPE SECRET KEY---');

app.post('/pay', (req, res) => {
    const { tokenId } = req.body
    console.log("TOKEN_ID ", tokenId);
    // const idempontencyKey = new Date().getTime()
    stripe.charges.create({
        source: tokenId,
        amount: 500,//in cents
        currency: "usd"
    }, (sErr, sRes) => {
        if (sErr) {
            res.send(sErr)
        } else {
            res.send(sRes)
        }
    })
})

// app.post('/secret', async (req, res) => {
//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: 5 * 100,
//             currency: 'usd',
//             payment_method_types: ['card']
//         });

//         res.send({ secret: paymentIntent.client_secret })
//     } catch (e) {
//         res.send(e.message)
//     }
// })




app.listen(2727, () => {
    console.log('running...');
})