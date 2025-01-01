import productController from "../schemas/productSchema.js";

const products = (req, res) => {
  const { productName, price, quantity, image } = req.body;
  const products = new productController({ productName, price, image, quantity });
//   console.log(products)
  products.save();
  res.send("product saved")
};

export default products;
