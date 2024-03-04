import { createSlice } from '@reduxjs/toolkit';

import {
  getAllDiaryInformation,
  addDiaryProducts,
  deleteDiaryProducts,
  addDiaryExercise,
  deleteDiaryExercise,
} from './operations';

const initialState = {
  consumedProductsArray: [],
  completedExercisesArray: [],
  isLoading: false,
  error: null,
  allDiaryInformation: {},
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleGetAllDiaryInformationFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allDiaryInformation = action.payload;
};

const handleAddDiaryProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.consumedProductsArray.push(action.payload);
};

const handleDeleteDiaryProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.consumedProductsArray.findIndex(
    (product) => product._id === action.payload._id
  );
  state.consumedProductsArray.splice(index, 1);
};

const handleAddDiaryExerciseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.completedExercisesArray.push(action.payload);
};

const handleDeleteDiaryExerciseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const index = state.completedExercisesArray.findIndex(
    (product) => product._id === action.payload._id
  );
  state.completedExercisesArray.splice(index, 1);
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getAllDiaryInformation.pending, handlePending)
      .addCase(
        getAllDiaryInformation.fulfilled,
        handleGetAllDiaryInformationFulfilled
      )
      .addCase(getAllDiaryInformation.rejected, handleRejected)
      .addCase(addDiaryProducts.pending, handlePending)
      .addCase(addDiaryProducts.fulfilled, handleAddDiaryProductsFulfilled)
      .addCase(addDiaryProducts.rejected, handleRejected)
      .addCase(deleteDiaryProducts.pending, handlePending)
      .addCase(
        deleteDiaryProducts.fulfilled,
        handleDeleteDiaryProductsFulfilled
      )
      .addCase(deleteDiaryProducts.rejected, handleRejected)
      .addCase(addDiaryExercise.pending, handlePending)
      .addCase(addDiaryExercise.fulfilled, handleAddDiaryExerciseFulfilled)
      .addCase(addDiaryExercise.rejected, handleRejected)
      .addCase(deleteDiaryExercise.pending, handlePending)
      .addCase(
        deleteDiaryExercise.fulfilled,
        handleDeleteDiaryExerciseFulfilled
      )
      .addCase(deleteDiaryExercise.rejected, handleRejected),
});

export const diaryReducer = diarySlice.reducer;
