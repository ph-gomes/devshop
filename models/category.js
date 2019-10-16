const slug = require("../utils/slug");
const Joi = require("@hapi/joi");

const validation = require("../utils/validation");

const createSchema = Joi.object({
  category: Joi.string()
    .min(5)
    .max(245)
    .required(),
  description: Joi.string()
    .min(5)
    .required()
});

const getCategories = db => async _ => {
  const categories = await db("categories").select("*");
  const categoriesWithSlug = categories.map(category => {
    const newCategory = { ...category, slug: slug(category.category) };
    return newCategory;
  });

  return categoriesWithSlug;
};

const getCategoryById = db => async id => {
  const category = await db("categories")
    .select("*")
    .where("id", id);

  return category;
};

const createCategory = db => async category => {
  const value = validation.validate(category, createSchema);
  await db("categories").insert(value);
  return true;
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory
};
