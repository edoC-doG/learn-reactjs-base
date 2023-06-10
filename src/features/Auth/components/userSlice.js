import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";


export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        const data = await userApi.register(payload)
        //CALL API To Register

        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user))
        //SAVE DATA TO LOCAL STORAGE
        
        //RETURN USER DATA
        return data.user
    }
)
const userSlice = createSlice ({
        name: 'user     ',
        initialState: {
            current: {},
            settings: {},
        },
        reducers: {},
        extraReducers: {
            // 'user/register/fullfilled': () => {},
            [register.fulfilled]: (state, action)=> {
                state.current = action.payload
            }
        }
    }
)

const {reducer} = userSlice;
export default reducer; // default export
