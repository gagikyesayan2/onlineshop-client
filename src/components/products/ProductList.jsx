import React from 'react';
import ProductCard from './ProductCard';
import './productStyles/productList.css';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list-container">
      <div className="product-list">
        <div className="row">
          {products.map((product) => (
            <div key={product.productId} className="col">
              <ProductCard 
                product={product} 
                onViewDetails={onProductClick} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
