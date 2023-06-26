import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export const getBlogList = createAsyncThunk('blogs/getblogs', async (data, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${baseUrl}/blog-api/blog`);
        return data;
    } 
    catch (error) {
        return rejectWithValue(error.message);
    }
})

export const addBlog = createAsyncThunk('blogs/addBlog', async (blogdata, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${baseUrl}/blog-api/blog`, blogdata);
        return data;
    } 
    catch (error) {
        return rejectWithValue(error.message);
    }
})

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${baseUrl}/blog-api/blog/${id}`);
        return id;
    } 
    catch (error) {
        return rejectWithValue(error.message);
    }
})
