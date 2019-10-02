const router = require("express").Router();
const productsController = require("../controllers/products");

const init = db => {
  router.get("/:id/:slug", productsController.getProduct(db));
  return router;
};

module.exports = init;
