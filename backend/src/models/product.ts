import mongoose from "mongoose";
import { Product } from "../interfaces/Product";

export const productSchema = new mongoose.Schema<Product>({
  title: String,
  date: Date,
  description: String,
  price: Number,
  brand: String,
});