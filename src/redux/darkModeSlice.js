import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name:'darkMode',
    initialState:{
        value: false
    },
    reducers: {
        toggle: state => {
            state.value = !state.value
        }
    }
})

export const { toggle } = darkModeSlice.actions

export const selectDarkMode = state => state.darkMode.value

export default darkModeSlice.reducer