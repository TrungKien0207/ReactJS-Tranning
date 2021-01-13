import counterReducer from '../features/Counter/counterSlide';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  count: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;