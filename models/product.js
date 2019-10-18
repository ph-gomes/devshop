const getPaginationParams = params => {
  const { currentPage, pages, pageSize } = params;
  return {
    currentPage: currentPage ? parseInt(currentPage) : 0,
    pages: pages ? parseInt(pages) : 0,
    pageSize: pageSize ? parseInt(pageSize) : 2
  };
};

const init = db => {
  const getProductsByCategoryId = async (id, params) => {
    const pagination = getPaginationParams(params);
    const products = await db("products")
      .select("*")
      .whereIn("id", function() {
        this.select("product_id")
          .from("categories_products")
          .where("category_id", id);
      })
      .offset(pagination.currentPage * pagination.pageSize)
      .limit(pagination.pageSize);

    const productCount = await db("products")
      .count("* as total")
      .whereIn("id", function() {
        this.select("product_id")
          .from("categories_products")
          .where("category_id", id);
      })
      .first();

    pagination.pages = Math.ceil(productCount.total / pagination.pageSize);

    return {
      data: products,
      pagination
    };
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
