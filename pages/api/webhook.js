const stripe = require("stripe")(process.env.STRIPE_SK);
import { buffer } from "micro";
import { Order } from "@/models/Order";
import mongoose from "mongoose";

const endpointSecret =
  "whsec_60f67438ccd47f949a5721382bd5a6355453625fddeff5e82cdb30389636c3ed";

export default async function handler(request, response) {
  const mongoUrl = process.env.MONGODB_URL;
  mongoose.connect(mongoUrl);
  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(request),
      sig,
      endpointSecret
    );
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status == "paid";
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        });
      }
      console.log(data);
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
  }
  response.status(200).send("ok");
}

export const config = {
  api: { bodyParser: false },
};

// galore-jovial-super-lead
// acct_1Ouf5hP7xNlk5e0A
