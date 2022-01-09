import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './darkModeSlice'
import themeReducer from './themeSlice'

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        theme: themeReducer
    }
})