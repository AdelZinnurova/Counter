import {createAction, createReducer} from "@reduxjs/toolkit";
import {ChangeEvent} from "react";

export const changeStartCountInCounterAC = createAction("settings/changeStartCountInCounter")
export const changeMaxCountAC = createAction<{ event: ChangeEvent<HTMLInputElement> }>("settings/changeMaxCount")
export const changeStartCountAC = createAction<{ event: ChangeEvent<HTMLInputElement> }>("settings/changeStartCount")

type SettingsState = {
    maxCount: number
    startCount: number
    isSet: boolean
}

const initialState: SettingsState = {
    maxCount: 5,
    startCount: 0,
    isSet: false,
}

export const settingsReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeStartCountInCounterAC, state => {
            state.isSet = true
        })
        .addCase(changeMaxCountAC, (state, action) => {
            state.maxCount = Number(action.payload.event.currentTarget.value)
            state.isSet = false
        })
        .addCase(changeStartCountAC, (state, action) => {
            state.startCount = Number(action.payload.event.currentTarget.value)
            state.isSet = false
        })
})

