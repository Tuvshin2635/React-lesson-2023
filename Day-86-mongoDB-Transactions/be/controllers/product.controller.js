const Product = require("../model/product");

// exports.getAllProducts = async (req, res) => {

// }

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json({
      status: true,
      product,
    });
  } catch (error) {
    res.json({ status: false, error });
  }
};
