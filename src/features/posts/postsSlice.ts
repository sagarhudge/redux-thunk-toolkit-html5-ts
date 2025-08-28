import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Post, PostsState } from './types';

// GET Posts
export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=2');
    return response.data;
  }
);

// POST New Post
export const addPost = createAsyncThunk<Post, Post>(
  'posts/addPost',
  async (newPost) => {
    const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost);
    return response.data;
  }
);

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching posts';
      })
      // POST
      .addCase(addPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.items.unshift(action.payload);
      });
  },
});

export default postsSlice.reducer;
