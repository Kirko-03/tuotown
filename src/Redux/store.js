import {combineReducers} from "redux";
import { configureStore } from '@reduxjs/toolkit';
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
    header:headerReducer
})
export const  store = configureStore({
    reducer:rootReducer
    }
)
