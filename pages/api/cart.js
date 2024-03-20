import { Product } from "@/models/Products";
import mongoose from "mongoose";

export default async function handle(request, response) {
  const mongoUrl = process.env.MONGODB_URL;
  mongoose.connect(mongoUrl);

  const ids = request.body.ids;
  response.json(await Product.find({ _id: ids }));
}
