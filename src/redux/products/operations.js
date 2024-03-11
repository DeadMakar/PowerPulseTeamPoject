import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllProductsCategories = createAsyncThunk(
  'products/fetchAllProductsCategory',
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
  'products/fetchProducts',
  async (formData, thunkAPI) => {
    try {
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
      //
      console.log(params);

      const response = await axios.get('products/filters', { params });

      //
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
