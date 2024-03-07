import { createSlice } from '@reduxjs/toolkit';
import {
  // createSettings,
  getCurrentUser,
  updateAvatar,
  updateSettings,
} from './operations';

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
    avatar: '',
    bmr: 0,
    trainingTime: 110,

    userMetrics: false,
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
        state.isLoading = false;
        state.error = null;

        state.user.name = action.payload[0].name;
        state.user.email = action.payload[0].email;
        // state.user.height = action.payload[0].height;
        // state.user.currentWeight = action.payload[0].currentWeight;
        // state.user.desiredWeight = action.payload[0].desiredWeight;
        // state.user.birthday = action.payload[0].birthday;
        // state.user.blood = action.payload[0].blood;
        // state.user.levelActivity = action.payload[0].levelActivity;
        // state.user.avatar = action.payload[0].avatar;
        // state.user.bmr = action.payload[0].bmr;
        // state.user.trainingTime = action.payload[0].trainingTime;
        state.user.userMetrics = action.payload[0].userMetrics;
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
