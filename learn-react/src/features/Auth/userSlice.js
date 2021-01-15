import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userAPI';

export const register = createAsyncThunk('user/register', async (payload) => {
  //call API to register
  const data = await userApi.register(payload);

  // save data to loacl storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user)); //do data.user la 1 object

  //return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer; //default export
