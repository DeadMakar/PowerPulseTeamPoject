import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllProductsCategories = createAsyncThunk(
  '/user/products/categories/fetchAllProductsCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('products/categories');
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'user/products/fetchProducts',
  async (formData, thunkAPI) => {
    const { title, category, groupBloodNotAllowed } = formData;
    const params = {};

    if (title) {
      params.title = title.trim();
    }

    if (category !== null) {
      params.category = category.toLowerCase();
    } else {
      params.category = category;
    }

    if (groupBloodNotAllowed) {
      params.groupBloodNotAllowed = groupBloodNotAllowed;
    }

    try {
      const response = await axios.get(`products/filters`, {
        params,
      });
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
