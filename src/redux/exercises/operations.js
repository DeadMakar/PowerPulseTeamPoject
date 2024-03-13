import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://powerpulseback.onrender.com/';

export const fetchExercisesCategories = createAsyncThunk(
  'exercises/fetchExercisesCategories',
  async (filter, thunkAPI) => {
    try {
      console.log(filter);
      const response = await axios.get(`exercises/filters?filter=${filter}`);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchExercisesList = createAsyncThunk(
//   'exercises/fetchExercisesList',
//   async ({ filter = '', filterList = '', target = '' }, thunkAPI) => {
//     console.log(filter, filterList, target);
//     try {
//       const response = await axios.get(
//         `/exercises?bodyPart=${filter}&equipment=${filterList}&target=${target}`
//       );

//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       console.log(e.message);
//       toast.error(`Oops! Something was wrong.... ${e.message}`);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const fetchExercisesList = createAsyncThunk(
  '/exercises/exercises/fetchExercisesList',
  async (target, thunkAPI) => {
    try {
      const response = await axios.get(`exercises/query?exercise=${target}`);

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

// export const getExerciseByItem = createAsyncThunk(
//   'exercises/getExerciseByItem',
//   async ({ bodyPart, equipment, target }, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `/exercises?bodyPart=${bodyPart}&equipment=${equipment}&tartget=${target}`
//       );

//       console.log(response.data);
//       return response.data;
//     } catch (e) {
//       console.log(e.message);
//       toast.error(`Oops! Something was wrong.... ${e.message}`);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
