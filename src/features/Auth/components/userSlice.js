import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKey from 'constants/storage-key';

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload);
  //CALL API To Register

  localStorage.setItem(StorageKey.TOKEN, data.jwt);
  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
  //SAVE DATA TO LOCAL STORAGE

  //RETURN USER DATA
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);
  //CALL API To Login

  localStorage.setItem(StorageKey.TOKEN, data.jwt);
  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
  //SAVE DATA TO LOCAL STORAGE

  //RETURN USER DATA
  return data.user;
});

const userSlice = createSlice({
  name: 'user     ',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKey.USER))||{},
    settings: {},
  },
  reducers: {
    logout(state){
      localStorage.removeItem(StorageKey.TOKEN);
      localStorage.removeItem(StorageKey.USER);
      state.current = {};
    }
  },
  extraReducers: {
    // 'user/register/fullfilled': () => {},
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const {logout} = actions
export default reducer; // default export
