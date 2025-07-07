import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../features/model/counter-reducer.ts";
import {settingsReducer} from "../features/model/settings-reducer.ts";

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch