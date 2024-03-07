import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://powerpulseback.onrender.com/';

export const getCurrentUser = createAsyncThunk(
  'prifileSettings/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('users/current');
      //
      console.log(response);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const createSettings = createAsyncThunk(
//   'prifileSettings/createSettings',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('users/metrics', credentials);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const updateSettings = createAsyncThunk(
  'prifileSettings/updateSettings',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('users/metrics', credentials);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'prifileSettings/updateAvatar',
  async (imageUrl, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', imageUrl);
      const res = await axios.patch('users/metrics', formData);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
