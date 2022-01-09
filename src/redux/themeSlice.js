import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState : {
        value: '#00c853'
    },
    reducers: {
        updateTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateTheme } = themeSlice.actions

export const selectTheme = state => state.theme.value

export default themeSlice.reducer