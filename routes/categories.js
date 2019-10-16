const router = require("express").Router();

const init = db => {
  const categoriesController = require("../controllers/categories")(db);

  router.get("/:id/:slug", categoriesController.getCategory);
  return router;
};

module.exports = init;
