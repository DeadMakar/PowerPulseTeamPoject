import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://powerpulseback.onrender.com/';

export const fetchExercisesCategories = createAsyncThunk(
  '/exercises/filters',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('exercises');
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExercisesList = createAsyncThunk(
  '/exercises/exercises/fetchExercisesList',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('exercises/filters', { data });
      return response.data;
    } catch (error) {
      console.log(error);
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

export const getExercisesFilter = createAsyncThunk(
  'exercises/getExercisesFilter',
  async (paramsExe, thunkAPI) => {
    try {
      const response = await axios.get(
        `/exercises?filter=${paramsExe.filter}&name=${paramsExe.name}`
      );
      return response.data;
    } catch (e) {
      console.log(e.message);
      toast.error(`Oops! Something was wrong.... ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
