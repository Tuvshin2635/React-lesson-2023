// const express = require("express")

const User = require("../model/user");

exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession();
    session.startTransaction();
    const user = await User.create(req.body.user, { session });
    const shippingAddress = await shippingAddress.create(
      req.body.shippingAddress,
      { session }
    );
    await session.commitTransaction();
    session.endSession();
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};

exports.creatTransactionWithOutSession = async (req, res) => {
  try {
    const user = await User.create(req.body.user);
    const shippingAddress = await shippingAddress.create(
      req.body.shippingAddress
    );
    res.json({ status: true, user, shippingAddress });
  } catch (error) {
    res.json({ status: false, error });
  }
};
