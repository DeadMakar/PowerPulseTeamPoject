import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

export const getAllDiaryInformation = createAsyncThunk(
  '/diary/getAllDiaryInformation',
  async (selectedDate, thunkAPI) => {
    try {
      const formattedDate = format(selectedDate, 'dd-MM-yyyy');

      const response = await axios.get(`diary?date=${formattedDate}`);

      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        theme: 'dark',
      });

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryProducts = createAsyncThunk(
  '/diary/products/addDiaryProducts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('diary/products', data);
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryProducts = createAsyncThunk(
  '/diary/products/deleteDiaryProducts',
  async ({ productId, selectedDate }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `diary/products/${productId}?date=${selectedDate}`
      );
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDiaryExercise = createAsyncThunk(
  '/diary/products/addDiaryExercise',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('diary/exercises', data);
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDiaryExercise = createAsyncThunk(
  '/diary/exercises/deleteDiaryExercise',
  async ({ exerciseId, selectedDate }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `diary/exercises/${exerciseId}?date=${selectedDate}`
      );
      return response.data;
    } catch (error) {
      toast.error('Sorry, something went wrong, please try again', {
        theme: 'dark',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
