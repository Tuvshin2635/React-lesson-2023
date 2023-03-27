const Restaurant = require("../models/restaurants");

exports.getRestaurants = async (req, res) => {
  try {
    const result = await Restaurant.find({}).limit(10);
    res.json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
