import {createAction, createReducer} from "@reduxjs/toolkit";

export const resetCountAC = createAction("count/resetCount")
export const incCountAC = createAction("count/incCount")

const initialState = 0

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(resetCountAC, () => initialState)
        .addCase(incCountAC, state => state + 1)
})