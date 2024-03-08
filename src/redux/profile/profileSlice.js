import { createSlice } from '@reduxjs/toolkit';
import { updateAvatar, updateSettings } from './operations';

const initialState = {
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profileSettings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateSettings.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateSettings.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(updateSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateAvatar.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateAvatar.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })

      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const profileReducer = profileSlice.reducer;
