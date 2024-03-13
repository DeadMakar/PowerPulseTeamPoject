import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://powerpulseback.onrender.com/';

export const fetchExercisesCategories = createAsyncThunk(
  'exercises/fetchExercisesCategories',
  async (filter, thunkAPI) => {
    try {
      const response = await axios.get(`exercises/filters?filter=${filter}`);
      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExercisesList = createAsyncThunk(
  '/exercises/exercises/fetchExercisesList',
  async (target, thunkAPI) => {
    try {
      const response = await axios.get(`exercises/query?exercise=${target}`);

      return response.data;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExercises = createAsyncThunk(
  'exercises/addExercises',
  async (exercise, thunkAPI) => {
    try {
      const response = await axios.post('exercises', exercise);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
