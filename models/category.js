const slug = require("../utils/slug");
const Joi = require("@hapi/joi");

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

const extractErrors = error => {
  return error.details.reduce((prev, curr) => {
    if (prev[curr.path[0]]) {
      prev[curr.path[0]].push(curr.type);
    } else prev[curr.path[0]] = [curr.type];

    return prev;
  }, {});
};

const createCategory = db => async category => {
  const { error, value } = createSchema.validate(category, {
    abortEarly: false,
    stripUnknown: true
  });
  if (error)
    throw Error({
      message: "validation",
      errors: extractErrors(error)
    });
  else await db("categories").insert(value);
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory
};
