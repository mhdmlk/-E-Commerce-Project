const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const CreatePayment = async (req, res) => {
    const { product } = req.body

    const lineItems = product.map((product) => {
        console.log(product.product)
        return {
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.product.productName,
                },
                unit_amount: product.product.price * 100,
            },
            quantity: product.quantity,
        }
    })
    const session = await stripe.checkout.session.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://lacalhost:3000/cancel",
    });
    console.log(session)
    res.json({ id: session.id })
}
module.exports = {
    CreatePayment
}