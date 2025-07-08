import {createAction, createReducer} from "@reduxjs/toolkit";

export const resetCountAC = createAction("count/resetCount")
export const incCountAC = createAction("count/incCount")

const initialStateCounter = 0

export const counterReducer = createReducer(initialStateCounter, builder => {
    builder
        .addCase(resetCountAC, () => initialStateCounter)
        .addCase(incCountAC, state => state + 1)
})