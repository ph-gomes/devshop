const router = require("express").Router();

const init = db => {
  const categoriesController = require("../../controllers/categories")(db);

  router.get("/", categoriesController.adminGetCategories);

  router.get("/new", categoriesController.adminCreateCategory);
  router.post("/new", categoriesController.adminCreateCategory);

  router.get("/delete/:id", categoriesController.adminRemoveCategory);

  router.get("/update/:id", categoriesController.adminUpdateCategory);
  router.post("/update/:id", categoriesController.adminUpdateCategory);

  return router;
};

module.exports = init;
