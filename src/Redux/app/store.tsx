import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from '../features/DataSlice'
export const Store = configureStore({
  reducer: {
    data: productSlice.reducer,
  },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
