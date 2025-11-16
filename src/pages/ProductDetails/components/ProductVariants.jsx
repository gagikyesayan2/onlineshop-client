import React, { useEffect, useState } from "react";
import './componentStyles/productVariants.css'
import { useDispatch } from "react-redux";
import { newProductSelected } from "../../../services/features/products/productSpecificSlice";


const ProductVariants = ({mainProductVariant,selectedProductVariants,productVariant}) =>{
    const variantImageUrl = "https://onlineshop-api-b7h9cfe2excmgebs.uaenorth-01.azurewebsites.net/product-images";

    const dispatch = useDispatch();
    
  
    return (
        <div>
          <p className="variant-text">{`Color: ${productVariant ? productVariant.metal_color :mainProductVariant.metal_color }`}</p>
          <br /><br />
        <div className="variants">
            <div className="variant">
                <img onClick={() =>{
                       dispatch(newProductSelected(mainProductVariant));
                     }} src={`${variantImageUrl}/${mainProductVariant.image_url}`} alt="" />
            </div>
            
             {
                selectedProductVariants.map((product) =>{
                    return <div key={product.id} className="variant">
                     <img onClick={() =>{
                       dispatch(newProductSelected(product));
                      
                       
                     }} src={`${variantImageUrl}/${product.image_url }`} alt="" />
                </div>
                })
               
             }
        </div>
        </div>

    )
}

export default ProductVariants;
