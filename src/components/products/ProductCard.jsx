import React from 'react';
import './productStyles/productCard.css'
import AddToCartButton from '../../pages/Cart/Cart';


const ProductCard = ({ product, onViewDetails }) => {
  const { productId, name, price, image_url ,description,rating} = product;
  
  const requestUrl = `http://localhost:3000/product-images/`;
  return (
    <div className="product-card">
      <img src={`${requestUrl}${image_url}`}  onClick={() => onViewDetails(productId)} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
  
        <p>{description}</p>
        <div className="rating">
            <p>{4.7}</p>
            <img className="star" src={require("../../assets/icons/star.png")} />
          </div>
        <div className="price-add-cart-btn">
          <p>${price}</p>
          <AddToCartButton />
        </div>
      </div>
     
    </div>
  );
};

export default ProductCard;
