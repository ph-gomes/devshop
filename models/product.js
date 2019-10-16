const init = db => {
  const getProductsByCategoryId = async id => {
    const products = await db("products")
      .select("*")
      .where("id", function() {
        this.select("product_id")
          .from("categories_products")
          .whereRaw("product_id = id")
          .where("category_id", id);
      });

    return products;
  };

  const getProductById = async id => {
    const product = await db("products")
      .select("*")
      .where("id", id);

    return product[0];
  };

  return {
    getProductsByCategoryId,
    getProductById
  };
};

module.exports = init;
