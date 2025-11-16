import React from "react";
import "./componentStyles/productDescription.css";
import ProductVariants from "./ProductVariants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BuyNowButton from "./BuyNowButton";

const ProductDescription = ({  productVariant, selectedProductVariants,selectedProductDescription}) => {

  const {productId, name, description, price, sales, metal_color, image_url } = selectedProductDescription;
 


  return (
    <div className="col">
      <div className="text-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <br />
        <img className="star" src={require("../../../assets/icons/star.png")} />
        <p className="rank">4.7 - ${sales} Sold</p>
        <br />
        <hr />
        <br />
        <h1>${price}</h1>

        <div className="variants-container">
    
          <ProductVariants
            mainProductVariant={{
              metal_color: metal_color,
              image_url: image_url,
              productId: productId
            }}
            selectedProductVariants={selectedProductVariants}
            productVariant = {productVariant}
          />
        </div>

         {
         <BuyNowButton /> 
        }
       {/* <div className="buy-save">
          <button>Buy Now</button>
          <button>Add to cart</button>
       </div>
    */}

      </div>
    </div>
  );
};

export default ProductDescription;
