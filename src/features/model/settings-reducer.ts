import {createAction, createReducer} from "@reduxjs/toolkit";

export const changeStartCountInCounterAC = createAction("settings/changeStartCountInCounter")
export const changeMaxCountAC = createAction<{ value: number }>("settings/changeMaxCount")
export const changeStartCountAC = createAction<{ value: number }>("settings/changeStartCount")

type SettingsState = {
    maxCount: number
    startCount: number
    isSet: boolean
}

export const initialStateSettings: SettingsState = {
    maxCount: 5,
    startCount: 0,
    isSet: false,
}

export const settingsReducer = createReducer(initialStateSettings, builder => {
    builder
        .addCase(changeStartCountInCounterAC, state => {
            state.isSet = true
        })
        .addCase(changeMaxCountAC, (state, action) => {
            state.maxCount = Number(action.payload.value)
            state.isSet = false
        })
        .addCase(changeStartCountAC, (state, action) => {
            state.startCount = Number(action.payload.value)
            state.isSet = false
        })
})

