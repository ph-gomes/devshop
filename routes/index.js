const router = require("express").Router();

const staticsController = require("../controllers/statics");
const auth = require("../controllers/auth");

const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const admin = require("./admin");

const init = db => {
  router.get("/", staticsController.getIndex);
  router.post("/login", auth.login(db));
  router.get("/logout", auth.logout);

  router.use("/admin", admin(db));
  router.use("/category", categoriesRouter(db));
  router.use("/product", productsRouter(db));

  return router;
};

module.exports = init;
