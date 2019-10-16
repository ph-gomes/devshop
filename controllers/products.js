const init = db => {
  const productModel = require("../models/product")(db);

  const getProduct = async (req, res) => {
    const product = await productModel.getProductById(req.params.id);
    res.render("product-detail", {
      product
    });
  };

  return {
    getProduct
  };
};

module.exports = init;
