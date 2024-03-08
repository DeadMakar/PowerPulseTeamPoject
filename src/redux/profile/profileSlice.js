import { createSlice } from '@reduxjs/toolkit';
import {
  // createSettings,
  // getCurrentUser,
  updateAvatar,
  updateSettings,
} from './operations';

const initialState = {
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profileSettings',
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(getCurrentUser.pending, (state) => {
      //   state.isLoading = true;
      // })

      // .addCase(getCurrentUser.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;

      //   state.user.name = action.payload[0].name;
      //   state.user.email = action.payload[0].email;
      //   state.user.height = action?.payload[1]?.height ?? 0;
      //   state.user.currentWeight = action?.payload[1]?.currentWeight ?? 0;
      //   state.user.desiredWeight = action?.payload[1]?.desiredWeight ?? 0;
      //   state.user.birthday = action?.payload[1]?.birthday ?? '00.00.0000';
      //   state.user.blood = action?.payload[1]?.blood ?? 0;
      //   state.user.levelActivity = action?.payload[1]?.levelActivity ?? 0;
      //   state.user.avatar = action?.payload[0].avatar ?? '';
      //   state.user.bmr = action?.payload[1]?.resultBMR ?? 0;
      //   state.user.trainingTime = action?.payload[1]?.trainingTime ?? 110;
      //   state.user.userMetrics = action.payload[0].userMetrics;
      // })

      // .addCase(getCurrentUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })

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
