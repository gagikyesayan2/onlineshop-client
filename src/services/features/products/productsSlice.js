import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchProductsThunk } from './productsThunk';


const dataSlice = createSlice({
    name: 'products',
    initialState: {
      items: [],      // Holds the fetched data
      loading: false, // Tracks loading state
      error: null,    // Holds any error messages
    },
    reducers: {
      // synchronous reducers if needed
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductsThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProductsThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchProductsThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch data';
        });
    },
  });
  
  export default dataSlice.reducer;