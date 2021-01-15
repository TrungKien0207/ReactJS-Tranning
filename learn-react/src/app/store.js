import counterReducer from '../features/Counter/counterSlide';
import userReducer from '../features/Auth/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
