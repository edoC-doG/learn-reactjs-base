import { createSlice } from "@reduxjs/toolkit";

const counSlice = createSlice ({
        name: 'counter',
        initialState: 0,
        reducers: {
            increase(
                state,
                action
            ){
                return state + 1
            },
            descrease(
                state,
                action
            ){
                return state - 1
            }
        },
    }
)

const {actions, reducer} = counSlice;
export const {increase, descrease} = actions; // name export
export default reducer; // default export
