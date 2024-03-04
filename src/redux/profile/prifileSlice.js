import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, updateAvatar, updateSettings } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    birthday: '0000-00-00',
    blood: 0,
    sex: '',
    levelActivity: 0,
  },
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateSettings.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateSettings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(updateSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateAvatar.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const profileReducer = profileSlice.reducer;
