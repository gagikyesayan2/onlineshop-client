
import React, { useState } from 'react';
import './componentStyles/buyingProduct.css'; 
import { useLocation } from 'react-router-dom';

const ProductBuying = () => {
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();

   const product = location.state.product;
   
   let finalSelectedProduct;
   if(product[1] === undefined){
      finalSelectedProduct = product[0];
   }else{
      finalSelectedProduct = {
         name:product[0].name,
         description:product[0].description,
         price:product[0].price,
         image_url:product[1].image_url,
         metal_color:product[1].metal_color

      }
   }
   
  const handleAdd = () => setQuantity((prev) => prev + 1);

  const handleSubtract = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1); 
  };

  return (
    <div className="col">
      
    <div className="productBuyingContainer">
      {/* Product Info Section */}
      <div className="productInfo">
        <img
          src={`http://localhost:3000/product-images/${finalSelectedProduct.image_url}`}
          alt={finalSelectedProduct.name}
          className="finalSelectedProductImage"
        />
        <div className="finalSelectedProductDetails">
          <h3>{finalSelectedProduct.name}</h3>
          <p>{finalSelectedProduct.description}</p>
          <p className="finalSelectedProductPrice">${finalSelectedProduct.price * quantity}</p>
          <p>Qnt: {quantity}x</p>
          <hr />
        </div>
      </div>

      {/* Quantity Control Section */}
      <div className="quantityControl">
        <button onClick={handleSubtract} className="quantityButton">-</button>
        <button onClick={handleAdd} className="quantityButton">+</button>
        <span className="quantity quantityButton"><p>{quantity}</p></span>

      </div>
    </div>
    
    </div>
  );
};

export default ProductBuying;
