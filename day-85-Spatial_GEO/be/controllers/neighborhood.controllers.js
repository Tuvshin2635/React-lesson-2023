const Neighborhoods = require("../models/neighborhood");

exports.getNeighborhoods = async (req, res) => {
  try {
    const result = await Neighborhoods.find({}).limit(10);
    res.json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};
