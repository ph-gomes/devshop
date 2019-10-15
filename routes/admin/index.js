const router = require("express").Router();

const categoriesRouter = require("./categories");
// const productsRouter = require("./products");

const init = db => {
  // router.use((req, res, next) => {
  //   if (req.session.user) {
  //     if (req.session.user.roles.indexOf("admin") < 0) {
  //       res.redirect("/");
  //     } else next();
  //   } else res.redirect("/login");
  // });

  router.get("/", (req, res) => res.render("admin/index"));
  router.use("/categories", categoriesRouter(db));
  // router.use("/product", productsRouter(db));

  return router;
};

module.exports = init;
