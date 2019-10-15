const router = require("express").Router();
const categoriesController = require("../../controllers/categories");

const init = db => {
  router.get("/", categoriesController.adminGetCategories(db));

  router.get("/new", categoriesController.adminCreateCategory(db));
  router.post("/new", categoriesController.adminCreateCategory(db));
  return router;
};

module.exports = init;
