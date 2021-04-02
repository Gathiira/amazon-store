const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51Ibf2sHeCH3o6LJzlpkj0FMcjjirRwLFzUVkJdqcBFFBLCsCff4OkV02PiIqZXy8znbqKnH8zUuuYr07ivrREUEr00AEh8YX7h");

// ApI

// App config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// API root
app.get("/", (request, response) => {
    response.status(200).send("Hello world")
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("payment total ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "kes"
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-44c8b/us-central1/api


