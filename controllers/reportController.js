const Product = require('../models/Product');

// Report: Low stock products (total stock per product <= 5)
exports.getLowStockProducts = async (req, res) => {
  try {
    const lowStockProducts = await Product.find({
      variants: { $elemMatch: { stock: { $lte: 5 } } }
    });

    res.json(lowStockProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
