const init = db => {
  const categoryModel = require("../models/category")(db);
  const productModel = require("../models/product")(db);

  const getCategory = async (req, res) => {
    const products = await productModel.getProductsByCategoryId(
      req.params.id,
      req.query
    );
    const category = await categoryModel.getCategoryById(req.params.id);
    res.render("category", {
      products,
      category
    });
  };

  const adminGetCategories = async (req, res) => {
    const categories = await categoryModel.getCategories();
    res.render("admin/categories/index", {
      categories
    });
  };

  const adminCreateCategory = async (req, res) => {
    if (req.method === "GET")
      res.render("admin/categories/create", {
        form: {},
        errors: []
      });
    else {
      try {
        await categoryModel.createCategory(req.body);
        res.redirect("/admin/categories");
      } catch (err) {
        res.render("admin/categories/create", {
          form: req.body,
          errors: err.erros.fields
        });
      }
    }
  };

  const adminRemoveCategory = async (req, res) => {
    await categoryModel.removeCategory(req.params.id);
    res.redirect("/admin/categories");
  };

  const adminUpdateCategory = async (req, res) => {
    if (req.method === "GET") {
      const category = await categoryModel.getCategoryById(req.params.id);
      res.render("admin/categories/update", {
        form: category[0],
        errors: []
      });
    } else {
      try {
        await categoryModel.updateCategory(req.params.id, req.body);
        res.redirect("/admin/categories");
      } catch (err) {
        res.render("admin/categories/update", {
          form: req.body,
          errors: err.erros.fields
        });
      }
    }
  };

  return {
    getCategory,
    adminGetCategories,
    adminCreateCategory,
    adminRemoveCategory,
    adminUpdateCategory
  };
};

module.exports = init;
