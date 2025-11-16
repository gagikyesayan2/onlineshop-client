import React, { useEffect } from 'react';
import ProductDescription from './components/ProductDescription';
import Reviews from './components/Reviews';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductSpecificDetails } from '../../services/features/products/productsThunk';
import ProductPhotos from './components/ProductPhotos';
import '../ProductDetails/productDetails.css';
import { useState } from 'react';
import { clearProductDetails } from '../../services/features/products/productSpecificSlice';

const ProductDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch(); 
  
  const { items: specificProductDetails, loading, error } = 
  useSelector((state) => state.productSpecificData);

  


  useEffect(() => {
    dispatch(clearProductDetails()); // Clear previous product details
    dispatch(fetchProductSpecificDetails(id)); // Fetch new product details

    return () => {
      dispatch(clearProductDetails()); // Clean up on unmount
    };
  }, [dispatch, id]);


  const productVariant = useSelector((state) => state.productSpecificData.items.selectedProductVariant);

  if (loading) {
  return (
    <div className="loading">
      <div className="circle"></div>
    </div>
  );
}





  return (
    <div className="productDetailsContainer">

 
    <div className='productDetailsRow'>
  
    {
      specificProductDetails.productPhotos  ? 
      <ProductPhotos productVariant={productVariant} mainPhoto={specificProductDetails.selectedProduct.image_url} photos={specificProductDetails.productPhotos}/> : ''
    }
    {
      specificProductDetails.selectedProduct  ? 
      <ProductDescription  productVariant={productVariant}
       selectedProductVariants={specificProductDetails.productVariants} 
       selectedProductDescription={specificProductDetails.selectedProduct}  /> : ''
    }

   
    {/* <AddToCartButton productId={productId} /> */}
    
    {/* <Reviews reviews={product.reviews} />  */}

   
    </div>
    </div>
  )
};

export default ProductDetails;
