export const selectProducts = (state) => state.products.productsArray;

export const selectProductsCategories = (state) =>
  state.products.productsCategories;

export const selectProductsIsLoading = (state) =>
  state.products.isLoadingProducts;

export const selectProductsCategoriesIsLoading = (state) =>
  state.products.isLoadingProductsCategories;

export const selectProductsError = (state) => state.products.error;

// //
// export const selectProductsTotal = (state) => state.products.total;
// export const selectQueryFilter = (state) => state.filters.query;
// export const selectRecommendedFilter = (state) => state.filters.recommended;

// //* export const selectProducts = (state) => state.products.products;
// // (selectProductsCategories) - export const selectCategoryFilter = (state) => state.filters.category;
// // (selectProductsIsLoading) - export const selectProductsIsLoading = (state) => state.products.isLoading;
// export const selectCategoriesProducts = (state) => state.products.categories;

// //* export const selectProductsError = (state) => state.products.error;
