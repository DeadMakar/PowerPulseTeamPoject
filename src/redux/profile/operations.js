import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const updateSettings = createAsyncThunk(
  'profileSettings/updateSettings',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);
      const response = await axios.put('users/metrics', credentials);
      console.log(response);
      toast.success('Your data has been updated successfully!', {
        theme: 'dark',
      });

      return response.data;
    } catch (e) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'profileSettings/updateAvatar',
  async (imageUrl, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', imageUrl);
      const res = await axios.post('users/avatars', formData);
      toast.success('Your avatar has been updated successfully!', {
        theme: 'dark',
      });
      return res.data;
    } catch (e) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
