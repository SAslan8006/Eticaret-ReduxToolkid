import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import productsSlice from './productsSlice'

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productsSlice,
    },
})