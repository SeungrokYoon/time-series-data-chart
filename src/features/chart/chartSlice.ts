import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChartState {
  value: number
}

const initialState: ChartState = {
  value: 0,
}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = chartSlice.actions

export default chartSlice.reducer
