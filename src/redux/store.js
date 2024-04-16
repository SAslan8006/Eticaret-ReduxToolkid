import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productsSlice,
        carts: cartSlice,
    },
})