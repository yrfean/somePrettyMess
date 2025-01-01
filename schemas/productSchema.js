import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    require: true,
    unique: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const productController = mongoose.model("products", productSchema);
export default productController;
