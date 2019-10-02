const router = require("express").Router();

const staticsController = require("../controllers/statics");

const categoriesRouter = require("./categories");
const productsRouter = require("./products");

const init = db => {
  router.get("/", staticsController.getIndex);
  router.use("/category", categoriesRouter(db));
  router.use("/product", productsRouter(db));

  return router;
};

module.exports = init;
