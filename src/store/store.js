import { configureStore } from "@reduxjs/toolkit";
import blogSlice from './slices/BlogSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice
    }
})

export default store
