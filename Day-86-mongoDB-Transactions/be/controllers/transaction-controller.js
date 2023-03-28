const Product = require("../model/product");
const ShippingAddress = require("../model/shippingAddress");

const User = require("../model/user");

exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();

    const product = await Product.updateOne(
      {
        _id: "64224e4259478f706d32c508",
      },
      { quantity: 89 },
      { session }
    );

    const user = await User.create(req.body.user, { session });
    const shippingAddress = await shippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress, product });
  } catch (error) {
    res.json({ status: "aldaa with session", error });
  }
};

exports.creatTransactionWithOutSession = async (req, res) => {
  try {
    const user = await User.create(req.body.user);
    const shippingAddress = await ShippingAddress.create({
      address: req.body.shippingAddress,
      user_id: user_id,
    });
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};
