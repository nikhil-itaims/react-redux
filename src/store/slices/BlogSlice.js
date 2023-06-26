import { createSlice } from "@reduxjs/toolkit";
import { getBlogList, addBlog, deleteBlog } from "../actions/BlogActions";

const initialState= {
    blogs: [],
    loading: false,
    success: false,
    error: false,
}

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers(build){
        build.addCase(getBlogList.pending, (state, action) => {
            state.loading = true            
        })
        .addCase(getBlogList.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.blogs = action.payload.data
        })
        .addCase(getBlogList.rejected, (state, action) => {
            state.loading = false
            state.success = false
            state.error = action.payload 
        })
        .addCase(addBlog.pending, (state, action) => {
            state.loading = true
        })
        .addCase(addBlog.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.blogs.push(action.payload.data)
        })
        .addCase(addBlog.rejected, (state, action) => {
            state.loading = false
            state.success = false
            state.error = action.payload 
        })
        .addCase(deleteBlog.pending, (state, action) => {
            state.loading = true
        })
        .addCase(deleteBlog.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            const index = state.blogs.findIndex((obj) => obj.id === action.payload);
            state.blogs.splice(index, 1)
        })
        .addCase(deleteBlog.rejected, (state, action) => {
            state.loading = false
            state.success = false
            state.error = action.payload 
        })
    }
});

export default blogSlice.reducer;