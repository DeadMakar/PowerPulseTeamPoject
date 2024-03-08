import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { authReducer } from './auth/slice';
import { diaryReducer } from './diary/slice';
import { productsReducer } from './products/slice';
import { exercisesReducer } from './exercises/exercisesSlice';
import { categoriesReducer } from './exercises/categoriesSlice';
import storage from 'redux-persist/lib/storage';
import { profileReducer } from './profile/prifileSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    diary: diaryReducer,
    products: productsReducer,
    exercises: exercisesReducer,
    categories: categoriesReducer,
    prifileSettings: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
