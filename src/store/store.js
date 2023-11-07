import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postAPI.middleware)
    })
}
