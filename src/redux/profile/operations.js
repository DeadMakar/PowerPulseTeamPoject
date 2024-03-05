import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://powerpulseback.onrender.com/';

// const setAuthToken = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const getCurrentUser = createAsyncThunk(
  'profile/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const userToken = state.auth.token;
      if (userToken) {
        const response = await axios.get('user-data');
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateSettings = createAsyncThunk(
  'profile/updateSettings',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('user-data-update', credentials);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'profile/updateAvatar',
  async (imageUrl, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', imageUrl);
      const res = await axios.patch('user-data-update', formData);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
