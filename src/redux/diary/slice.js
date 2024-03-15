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
  state.allDiaryInformation[0] = action.payload;
};

const handleAddDiaryExerciseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.completedExercisesArray = [
    ...state.completedExercisesArray,
    action.payload,
  ];
};

const handleDeleteDiaryExerciseFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.allDiaryInformation[1] = action.payload;
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
