import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from './../utils/status';

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getSearchProducts = createAsyncThunk('products/getSearchProducts', async (keyword) => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = response.json();
    return data;
})


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearchProducts.pending, (state, action) => {
                state.productsStatus = STATUS.LOADING;
            })

    }

})

export const { addToCart, removeFromCart, clearCart, getCartTotal } = searchSlice.actions;
export default searchSlice.reducer