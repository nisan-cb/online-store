import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

export const viewSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => {
            state.activeCategory = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const actions = viewSlice.actions

export default viewSlice.reducer