import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
