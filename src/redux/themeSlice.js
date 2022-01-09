import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:'theme',
    initialState : {
        value: '#651fff',
        selecting: false
    },
    reducers: {
        updateTheme: (state, action) => {
            state.value = action.payload
        },
        updateSelecting: state => {
            state.selecting = !state.selecting
        }
    }
})

export const { updateTheme, updateSelecting } = themeSlice.actions

export const selectTheme = state => state.theme.value
export const selectSelecting = state => state.theme.selecting

export default themeSlice.reducer