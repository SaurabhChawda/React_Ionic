import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import axios from 'axios'

interface InitialState {
  product: any
}
const initialState: InitialState = {
  product: {},
}

export const userProduct = createAsyncThunk('product/loadProduct', async () => {
  try {
    const { data: data } = await axios.get(
      'https://fakestoreapi.com/products/1',
    )
    return data
  } catch (error) {
    console.log('!failed')
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  // extraReducers: {
  //   [loadProduct.pending]: (state) => {
  //     console.log('!loading')
  //   },
  //   [loadProduct.rejected]: (state) => {
  //     console.log('!Rejected')
  //   },
  //   [loadProduct.fulfilled]: (state, action: PayloadAction<any>) => {
  //     state.product = action.payload
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(userProduct.fulfilled, (state, { payload }) => {
      state.product = payload
    })
    builder.addCase(userProduct.rejected, (state, action) => {
      console.log('!Failed')
    })
  },
})

export default productSlice.reducer
