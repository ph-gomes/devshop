const router = require("express").Router();
const categoriesController = require("../controllers/categories");

const init = db => {
  router.get("/:id/:slug", categoriesController.getCategory(db));
  return router;
};

module.exports = init;
