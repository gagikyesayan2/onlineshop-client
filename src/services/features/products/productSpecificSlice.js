import { createSlice } from '@reduxjs/toolkit';
import { fetchProductSpecificDetails, fetchSpecificProductPhotosThunk } from './productsThunk';



const productSpecificSlice = createSlice({
    name: 'productSpecificData',
    initialState: {
      items: [],      
      loading: false, 
      error: null,    
    },
    reducers: {
      clearProductDetails: (state) => {        
        
        state.items = [];
        state.loading = false;
        state.error = null;
      },
      newProductSelected:(state,action) =>{
        state.loading = false;
        
        state.items.selectedProductVariant = action.payload;
        
        
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductSpecificDetails.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchProductSpecificDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchProductSpecificDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch data';
        })
        .addCase(fetchSpecificProductPhotosThunk.fulfilled, (state, action) => {
          state.loading = false;
  
          state.items.push(action.payload.productPhotos);
          
        })
        .addCase(fetchSpecificProductPhotosThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch data';
        })
        .addCase(fetchSpecificProductPhotosThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
    },
  });
  export const { clearProductDetails } = productSpecificSlice.actions;

  export const {newProductSelected} = productSpecificSlice.actions;
  
  export default productSpecificSlice.reducer;