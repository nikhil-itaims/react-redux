import { createSlice } from "@reduxjs/toolkit";
import { removeAllBlog } from '../actions/index'

const blogSlice = createSlice({
    name: "blogs",
    initialState: [],
    reducers: {
        addBlog(state, action) {
            // use axios and do api call here
            state.push(action.payload);
        },
        deleteBlog(state, action) { 
            state.splice(action.payload, 1)
        },
    },
    extraReducers(build){
        build.addCase(removeAllBlog, () => {
            return []
        })
    }
});

export default blogSlice.reducer;
export const { addBlog, deleteBlog } = blogSlice.actions;