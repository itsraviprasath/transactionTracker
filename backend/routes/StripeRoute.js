const express = require("express")
const router = express.Router()
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.SECRETKEY);

const payBill = () => {
  router.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Demo",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000/login",
    });

    res.send({ url: session.url });
  });
};


module.exports = payBill