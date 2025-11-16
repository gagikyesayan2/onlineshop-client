import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BuyNowButton = () =>{
    const choosenProduct = useSelector((state) => state.productSpecificData.items);
    const navigate = useNavigate();
    
    return(
        <button onClick={() =>{
            navigate(`/payment/product/${choosenProduct.productId}`, 
                {state:{product:[choosenProduct.selectedProduct, choosenProduct.selectedProductVariant]}
            })
        }}>
            Buy Now
        </button>
    )
}

export default BuyNowButton;