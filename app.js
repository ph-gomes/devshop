const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Exist index in folder
const routes = require("./routes");
const categoryModel = require("./models/category");

const init = db => {
  const app = express();
  // Assign settings name to value
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  // Mounts the specified middleware, if no path uses the
  // middleware for every path
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(async (req, res, next) => {
    const categories = await categoryModel.getCategories(db)();
    // Send middleware data forward
    res.locals = {
      categories
    };
    next();
  });

  app.use(routes(db));

  return app;
};

module.exports = init;
