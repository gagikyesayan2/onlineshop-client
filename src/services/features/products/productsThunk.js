import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {getAllProducts} from '../../api/productApi/allproducts';
import {productSpecificDetails} from '../../api/productApi/productSpecificDetails';
import {specificProductPhotos} from '../../api/productApi/specificProductPhotos';

export const fetchProductsThunk = createAsyncThunk(
  'allProducts/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllProducts();
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
);

export const fetchProductSpecificDetails = createAsyncThunk(
  'specificProduct/fetchData',
  async (id, { rejectWithValue }) => {
    try {
      return await productSpecificDetails(id);
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
);

export const fetchSpecificProductPhotosThunk = createAsyncThunk(
  'specificProductPhotos/fetchData',
  async (id, { rejectWithValue }) => {
   
    try { 
      return await specificProductPhotos(id);
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors
    }
  }
)