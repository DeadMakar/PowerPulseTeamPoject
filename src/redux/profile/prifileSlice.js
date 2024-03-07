import { createSlice } from '@reduxjs/toolkit';
import {
  // createSettings,
  getCurrentUser,
  updateAvatar,
  updateSettings,
} from './operations';

import defaultAvatar from '../../assets/images/profile/gridicons_user.jpg';

const initialState = {
  user: {
    name: '',
    email: '',
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    birthday: '00.00.0000',
    blood: 0,
    sex: '',
    levelActivity: 0,
    avatar: defaultAvatar,
    bmr: 0,
    trainingTime: 110,
  },
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'prifileSettings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        console.log(action.payload.user);
        console.log(action.payload.user.bmr);

        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // .addCase(createSettings.pending, (state) => {
      //   state.isLoading = true;
      // })

      // .addCase(createSettings.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.user = action.payload;
      // })

      // .addCase(createSettings.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })

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
