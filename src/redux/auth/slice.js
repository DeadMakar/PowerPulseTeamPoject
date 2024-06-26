import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  logInGoogle,
} from './operations';

const initialState = {
  user: {
    userMetrics: false,
    blood: 0,
    levelActivity: 0,
    sex: 0,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isSuccessful: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSuccessful = true;
        state.user = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logInGoogle.fulfilled, (state, action) => {
        state.user = action.payload.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.user.name = action.payload.userName;
        state.user.blood = String(action.payload.blood);
        state.user.levelActivity = String(action.payload.levelActivity);

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
