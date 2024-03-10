import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchAllProductsCategories } from './operations';

const initialState = {
  productsArray: [],
  productsCategories: [],
  isLoadingProductsCategories: false,
  isLoadingProducts: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoadingProductsCategories = true;
  state.isLoadingProducts = true;
};

const handleRejected = (state, action) => {
  state.isLoadingProductsCategories = false;
  state.isLoadingProducts = false;
  state.error = action.payload;
};

const handleFetchProductsFulfilled = (state, action) => {
  state.isLoadingProducts = false;
  state.error = null;
  state.productsArray = action.payload;
  // console.log(action.payload);
};

const handleFetchAllProductsCategoriesFulfilled = (state, action) => {
  state.isLoadingProductsCategories = false;
  state.error = null;
  state.productsCategories = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, handleFetchProductsFulfilled)
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchAllProductsCategories.pending, handlePending)
      .addCase(
        fetchAllProductsCategories.fulfilled,
        handleFetchAllProductsCategoriesFulfilled
      )
      .addCase(fetchAllProductsCategories.rejected, handleRejected),
});

export const productsReducer = productsSlice.reducer;
