import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../../features/products/productsSlice';
import productSpecificSlice from '../../features/products/productSpecificSlice';

export default configureStore({
  reducer: 
  { 
    products: productsSlice,
    productSpecificData: productSpecificSlice  
  }, 
});
